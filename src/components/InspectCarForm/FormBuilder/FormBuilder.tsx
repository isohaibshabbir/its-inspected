import React, { useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import BaseRadio from "../BaseRadio/BaseRadio";
import CameraApp from "../Camers/Camera";

interface FormField {
    type: string;
    label: string;
    name: string;
    placeholder?: string;
    options?: string[];
    required?: boolean;
}

interface FormStep {
    title: string;
    fields: FormField[];
}

interface FormBuilderProps {
    schema: FormStep[]; // Now schema consists of multiple steps
    onSubmit: (data: Record<string, any>) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ schema, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [step, setStep] = useState(0); // Track the current step

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked, files } = e.target as any;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: prev[name]
                    ? checked
                        ? [...prev[name], value]
                        : prev[name].filter((v: string) => v !== value)
                    : checked
                        ? [value]
                        : [],
            }));
        } else if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                [name]: files ? files[0] : null,
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleNext = () => {
        if (step < schema.length - 1) {
            setStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep((prev) => prev - 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === schema.length - 1) {
            onSubmit(formData);
        } else {
            handleNext();
        }
    };

    const renderField = (field: FormField, index: number) => {
        const { type, label, name, placeholder, options, required } = field;

        switch (type) {
            case "text":
                return (
                    <div key={name} className="form-group">
                        <BaseInput
                            type={type}
                            id={name}
                            name={name}
                            placeholder={placeholder || ""}
                            required={required}
                            label={label}
                            onChange={handleChange}
                            index={index}
                            rules={{ required: false }}
                            value={formData[name] || ""}
                        />
                    </div>
                );
            case "date":
                return (
                    <div key={name} className="form-group">
                        <label htmlFor={name}>{label}</label>
                        <input type={type} id={name} name={name} placeholder={placeholder || ""} required={required} onChange={handleChange} />
                    </div>
                );
            case "radio":
                return (
                    <div key={name} className="form-group">
                        <label>{label}</label>
                        {options?.map((option) => (
                            <div key={option}>
                                <input type="radio" id={`${name}-${option}`} name={name} value={option} required={required} onChange={handleChange} />
                                <label htmlFor={`${name}-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case "select":
                return (
                    <div key={name} className="form-group">
                        <label htmlFor={name}>{label}</label>
                        <select id={name} name={name} required={required} onChange={handleChange}>
                            <option value="">Select...</option>
                            {options?.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            case "checkbox":
                return (
                    <div key={name} className="form-group">
                        <label>{label}</label>
                        {options?.map((option) => (
                            <div key={option}>
                                <input type="checkbox" id={`${name}-${option}`} name={name} value={option} onChange={handleChange} />
                                <label htmlFor={`${name}-${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case "file":
                return (
                    <div key={name} className="form-group">
                        <label htmlFor={name}>{label}</label>
                        <input type="file" id={name} name={name} onChange={handleChange} />
                    </div>
                );
            case "camera":
                return (
                    <div key={name} className="form-group">
                        <label>{label}</label>
                        <CameraApp
                            onCapture={(image) => setFormData((prev) => ({ ...prev, [name]: image }))}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3>{schema[step].title}</h3>

            {schema[step].fields.map((field, index) => (
                <div key={field.name}>{renderField(field, index)}</div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                {step > 0 && <button type="button" onClick={handlePrev}>Previous</button>}
                {step < schema.length - 1 ? (
                    <button type="button" onClick={handleNext}>Next</button>
                ) : (
                    <button type="submit">Submit</button>
                )}
            </div>
        </form>
    );
};

export default FormBuilder;
