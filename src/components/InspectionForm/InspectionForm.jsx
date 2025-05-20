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
import { storage } from "../../firebaseConfig";

export default function MultiStepForm() {
    const [step, setStep] = useState(0);
    const { control, handleSubmit, register, watch, trigger, formState: { errors }, } = useForm();

    const uploadImagesToFirebase = async (images) => {
        const uploadedUrls = [];
        for (const image of images) {
            if (image.file) {
                const storageRef = ref(storage, `images/${image.file.name}`);
                await uploadBytes(storageRef, image.file).then((snapshot) => {
                    console.log('Uploaded a blob or file!', snapshot);
                }); // Pass the file object directly
                const downloadUrl = await getDownloadURL(storageRef);
                uploadedUrls.push(downloadUrl);
            } else {
                console.error("Invalid image object:", image);
            }
        }

        return uploadedUrls;
    };

    const onSubmit = async (data) => {
        const formData = { ...data };

        // Upload images to Firebase
        for (const key in formData) {
            if (Array.isArray(formData[key])) {
                formData[key] = await uploadImagesToFirebase(formData[key]);
            }
        }

        console.log("Form Data with Uploaded URLs:", formData);
    };

    const handleNext = async () => {
        const valid = await trigger();
        if (valid) setStep(step + 1);
    };
    const watchFields = watch();

    return (
        <FormContainer>
            <Indicator currentStep={step} setStep={setStep} />
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
                                        rules={{ required: fieldConfig.required }}
                                        render={({ field }) => (
                                            <>
                                                {fieldConfig.type === "radio" ? (
                                                    <RadioContainer>
                                                        {fieldConfig.options?.map(option => (
                                                            <RadioLabel key={option}>
                                                                <RadioInput type="radio" {...field} value={option} required={fieldConfig.required} /> {option}
                                                            </RadioLabel>
                                                        ))}
                                                        {watchFields[fieldConfig.name] === "Other" && (
                                                            <>
                                                                <OtherInput type="text" placeholder="Please specify" {...register(`${fieldConfig.name}_other`)} />

                                                                <input type="range" min="0" max="10" step="1" {...register(`${fieldConfig.name}_score`)} />
                                                            </>
                                                        )}
                                                    </RadioContainer>
                                                ) : fieldConfig.type === "select" ? (
                                                    <SelectContainer>
                                                        <Select {...field} required={fieldConfig.required}>
                                                            {fieldConfig.options?.map(option => (<option key={option} value={option}>{option}</option>))}
                                                        </Select>

                                                        {watchFields[fieldConfig.name] === "Other" && (
                                                            <>
                                                                <input type="range" min="0" max="10" step="1" defaultValue={0} {...register(`${fieldConfig.name}_score`)} />
                                                            </>
                                                        )}
                                                    </SelectContainer>
                                                ) : fieldConfig.type === "battery" ? (
                                                    <BatteryCondition value={field.value || 0} onChange={field.onChange} />
                                                ) : fieldConfig.type === "image-upload" ? (
                                                    <ImageUpload {...field} singleIamge={fieldConfig.singleIamge} name={fieldConfig.name} />
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
                                                            onChange={(e) => field.onChange({ ...field.value, countryCode: e.target.value })}
                                                            required={fieldConfig.required}
                                                        />
                                                        <PhoneNumberInput
                                                            placeholder="Phone Number"
                                                            type="text"
                                                            onChange={(e) => field.onChange({ ...field.value, phoneNumber: e.target.value })}
                                                            required={fieldConfig.required}
                                                        />
                                                    </PhoneNumberContainer>
                                                ) : fieldConfig.type === "year" ? (
                                                    <YearSelect value={field.value} onChange={(e) => field.onChange(e.target.value)} />
                                                ) : fieldConfig.type === "textarea" ? (
                                                    <TextArea {...field} />
                                                ) : (
                                                    <Input type={fieldConfig.type} {...field} required={fieldConfig.required} />
                                                )}
                                                {errors[fieldConfig.name] && <ErrorMessage>This field is required</ErrorMessage>}
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
