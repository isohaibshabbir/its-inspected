import { formConfig } from "./config";
import { fieldValues } from "./fieldValues";

export const calculateStepScores = (formData) => {
    const stepScores = {};

    formConfig.forEach((stepConfig, stepIndex) => {
        let stepTotal = 0;
        let fieldCount = 0;

        stepConfig.sections.forEach((section) => {
            section.fields.forEach((field) => {
                if (field.type === "select" || field.type === "radio") {
                    const fieldValue = formData[field.name];

                    // Skip if the value is undefined or null
                    if (fieldValue === "N/A" || fieldValue === undefined || fieldValue === null) return;

                    // Check if "Other" is selected and use the slider value
                    if (fieldValue === "Other") {
                        const sliderValue = formData[`${field.name}_score`];
                        if (sliderValue !== undefined && sliderValue !== null) {
                            const numericSliderValue = Number(sliderValue);
                            if (!isNaN(numericSliderValue)) {
                                stepTotal += numericSliderValue;
                                fieldCount++;
                            }
                        }
                    } else {
                        // Get the predefined value from fieldValues or convert the value to a number
                        const predefinedValue = fieldValues[field.name]?.[fieldValue];
                        const numericValue = predefinedValue !== undefined
                            ? predefinedValue
                            : Number(fieldValue);

                        if (!isNaN(numericValue)) {
                            stepTotal += numericValue;
                            fieldCount++;
                        }
                    }
                }
            });
        });

        stepScores[stepIndex] = {
            total: stepTotal,
            average: fieldCount > 0 ? stepTotal / fieldCount : 0,
        };
    });

    return stepScores;
};