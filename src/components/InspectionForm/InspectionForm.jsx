import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { formConfig } from "./config";
import {
    FormContainer,
    FormGrid,
    Section,
    Divider,
    Input,
    Select,
    ErrorMessage,
    Button,
    OtherInput,
    RadioContainer,
    RadioLabel,
    RadioInput,
    CheckboxGroup,
    CheckboxLabel,
    CheckboxInput,
    PhoneNumberContainer,
    CountryCodeInput,
    PhoneNumberInput,
    ImageUpload,
    BatteryCondition,
    YearSelect,
    Indicator,
    TextArea,
    SelectContainer,
} from "./Components";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { calculateStepScores } from "./utils";

export default function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [uploadedImages, setUploadedImages] = useState({}); // Store uploaded image URLs separately
    const { control, handleSubmit, register, watch, trigger, formState: { errors }, setValue } = useForm();

    const uploadImagesToFirebase = async (images) => {
        const uploadedUrls = [];
        for (const image of images) {
            if (image.file) {
                const timestamp = new Date().toISOString(); // Add a unique timestamp
                const storageRef = ref(storage, `images/${timestamp}_${image.file.name}`);
                await uploadBytes(storageRef, image.file).then((snapshot) => {
                    console.log('Uploaded a blob or file!', snapshot);
                });
                const downloadUrl = await getDownloadURL(storageRef);
                uploadedUrls.push(downloadUrl);
            } else {
                console.error("Invalid image object:", image);
            }
        }
        return uploadedUrls;
    };

    const handleNext = async () => {
        const valid = await trigger();
        if (valid) {
            const currentStepFields = formConfig[step].sections.flatMap(section => section.fields);
            const imageFields = currentStepFields.filter(field => field.type === "image-upload");

            // Move to the next step immediately
            setStep(step + 1);

            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: "smooth" });

            // Start uploading images in the background
            for (const field of imageFields) {
                const fieldName = field.name;

                // Skip upload if images for this field already exist in uploadedImages
                if (uploadedImages[fieldName]) {
                    console.log(`Images for ${fieldName} already uploaded. Skipping upload."`);
                    continue;
                }

                const images = watchFields[fieldName];
                if (Array.isArray(images)) {
                    uploadImagesToFirebase(images).then((uploadedUrls) => {
                        setUploadedImages(prev => ({ ...prev, [fieldName]: uploadedUrls })); // Store URLs separately
                    }).catch((error) => {
                        console.error(`Error uploading images for ${fieldName}:`, error);
                    });
                }
            }
        }
    };
    const sanitizeData = (data) => {
        const sanitizedData = {};
        for (const key in data) {
            if (data[key] !== undefined) {
                sanitizedData[key] = data[key];
            }
        }
        return sanitizedData;
    };

    const onSubmit = async (data) => {

        try {
            // Merge uploaded image URLs into the main form data
            const finalData = { ...data, ...uploadedImages };
            console.log("Final Form Data with Uploaded URLs:", finalData);
            const scores = calculateStepScores(finalData)
            console.log("Final Form Data with Uploaded URLs:", scores);

            // Sanitize the data to remove undefined values
            const sanitizedData = sanitizeData(finalData);

            const averages = {
                engine: scores[1].average,
                transmission: scores[2].average,
                underbody: scores[3].average,
                electic: scores[4].average,
                interior: scores[5].average
            };

            const dataAndAverages = { ...sanitizedData, averages };
            // Push data to Firestore
            const docRef = await addDoc(collection(db, "inspections"), dataAndAverages);
            console.log("Document written with ID: ", docRef.id);

            // Optionally, navigate to a success page or show a success message
            // alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error adding document: ", error);
            // alert("Failed to submit the form. Please try again.");
        }
    };

    const watchFields = watch();

    const handleStepChange = async (targetStep) => {
        if (targetStep > step) {
            const valid = await trigger();
            if (!valid) {
                console.error("Validation failed. Cannot move to the next step.");
                return;
            }
        }
        setStep(targetStep);
    };

    return (
        <FormContainer>
            <Indicator currentStep={step} setStep={handleStepChange} />
            <form onSubmit={handleSubmit(onSubmit)}>
                {formConfig[step].sections.map((section) => (
                    <div key={section.title}>
                        <Section>{section.title}</Section>
                        <FormGrid>
                            {section.fields.map((fieldConfig) => (
                                <div key={fieldConfig.name} style={{ gridColumn: `span ${fieldConfig.colSpan || 1}` }}>
                                    <label>{fieldConfig.label}</label>
                                    <Controller
                                        name={fieldConfig.name}
                                        control={control}
                                        defaultValue={
                                            fieldConfig.type === "radio" ? "Pass" : // Default radios to "Pass"
                                                undefined
                                        }
                                        rules={{ required: fieldConfig.required }}
                                        render={({ field }) => (
                                            <>
                                                {fieldConfig.type === "image-upload" ? (
                                                    <ImageUpload
                                                        {...field}
                                                        singleIamge={fieldConfig.singleIamge}
                                                        name={fieldConfig.name}
                                                    />
                                                ) : (
                                                    <>
                                                        {fieldConfig.type === "radio" ? (
                                                            <RadioContainer>
                                                                {fieldConfig.options?.map((option, index) => (
                                                                    <RadioLabel key={`${fieldConfig.name}-${index}`}> {/* Add unique key */}
                                                                        <RadioInput
                                                                            type="radio"
                                                                            {...field}
                                                                            value={option}
                                                                            checked={field.value === option} // Ensure the radio button reflects the current value
                                                                            required={fieldConfig.required}
                                                                        /> {option}
                                                                    </RadioLabel>
                                                                ))}
                                                                {watchFields[fieldConfig.name] === "Other" && (
                                                                    <>
                                                                        <OtherInput
                                                                            type="text"
                                                                            placeholder="Please specify"
                                                                            {...register(`${fieldConfig.name}_other`)}
                                                                            value={watchFields[`${fieldConfig.name}_other`] || ""}
                                                                        />
                                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                                                                            <span>0</span> {/* Label for the start of the slider */}
                                                                            <input
                                                                                type="range"
                                                                                min="0"
                                                                                max="10"
                                                                                step="1"
                                                                                {...register(`${fieldConfig.name}_score`)}
                                                                                value={watchFields[`${fieldConfig.name}_score`] || 5} // Default slider to 5
                                                                            />
                                                                            <span>10</span> {/* Label for the end of the slider */}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </RadioContainer>
                                                        ) : fieldConfig.type === "select" ? (
                                                            <SelectContainer>
                                                                <Select {...field} required={fieldConfig.required}>
                                                                    {fieldConfig.options?.map((option, index) => (
                                                                        <option key={`${fieldConfig.name}-${index}`} value={option}> {/* Add unique key */}
                                                                            {option}
                                                                        </option>
                                                                    ))}
                                                                </Select>

                                                                {watchFields[fieldConfig.name] === "Other" && (
                                                                    <>
                                                                        <OtherInput
                                                                            type="text"
                                                                            placeholder="Please specify"
                                                                            {...register(`${fieldConfig.name}_other`)}
                                                                            value={watchFields[`${fieldConfig.name}_other`] || ""}
                                                                        />
                                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                                                                            <span>0</span> {/* Label for the start of the slider */}
                                                                            <input
                                                                                type="range"
                                                                                min="0"
                                                                                max="10"
                                                                                step="1"
                                                                                {...register(`${fieldConfig.name}_score`)}
                                                                                value={watchFields[`${fieldConfig.name}_score`] || 5}
                                                                            />
                                                                            <span>10</span> {/* Label for the end of the slider */}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </SelectContainer>
                                                        ) : fieldConfig.type === "battery" ? (
                                                            <BatteryCondition value={field.value || 0} onChange={field.onChange} />
                                                        ) : fieldConfig.type === "checkbox" ? (
                                                            <CheckboxGroup>
                                                                {fieldConfig.options?.map((option) => (
                                                                    <CheckboxLabel key={option}>
                                                                        <CheckboxInput
                                                                            type="checkbox"
                                                                            value={option}
                                                                            checked={field.value?.includes(option)}
                                                                            onChange={(e) => {
                                                                                const value = e.target.value;
                                                                                const newValue = field.value?.includes(value)
                                                                                    ? field.value.filter((item) => item !== value)
                                                                                    : [...(field.value || []), value];
                                                                                field.onChange(newValue);
                                                                            }}
                                                                        />
                                                                        {option}
                                                                    </CheckboxLabel>
                                                                ))}
                                                            </CheckboxGroup>
                                                        ) : fieldConfig.type === "phone" ? (
                                                            <PhoneNumberContainer>
                                                                <CountryCodeInput
                                                                    placeholder="+61"
                                                                    type="text"
                                                                    maxLength="4"
                                                                    value={field.value?.countryCode || ""} // Retain country code
                                                                    onChange={(e) => field.onChange({ ...field.value, countryCode: e.target.value })}
                                                                    required={fieldConfig.required}
                                                                />
                                                                <PhoneNumberInput
                                                                    placeholder="Phone Number"
                                                                    type="text"
                                                                    value={field.value?.phoneNumber || ""} // Retain phone number
                                                                    onChange={(e) => field.onChange({ ...field.value, phoneNumber: e.target.value })}
                                                                    required={fieldConfig.required}
                                                                />
                                                            </PhoneNumberContainer>
                                                        ) : fieldConfig.type === "year" ? (
                                                            <YearSelect value={field.value} onChange={(e) => field.onChange(e.target.value)} />
                                                        ) : fieldConfig.type === "textarea" ? (
                                                            <TextArea {...field} />
                                                        ) : fieldConfig.type === "date" ? (
                                                            <Input type="date" {...field} required={fieldConfig.required} />
                                                        ) : fieldConfig.type === "time" ? (
                                                            <Input type="time" {...field} required={fieldConfig.required} />
                                                        ) : (
                                                            <Input type={fieldConfig.type} {...field} required={fieldConfig.required} />
                                                        )}
                                                        {errors[fieldConfig.name] && <ErrorMessage>This field is required</ErrorMessage>}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    />
                                </div>
                            ))}
                        </FormGrid>
                        <Divider />
                    </div>
                ))}
                <Button type="button" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
                {step < formConfig.length - 1 && (
                    <Button type="button" onClick={handleNext}>Next</Button>
                )}
                {step === formConfig.length - 1 && <Button type="submit">Submit</Button>}
            </form>
        </FormContainer>
    );
}
