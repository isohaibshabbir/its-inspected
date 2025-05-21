import React, { forwardRef } from "react";
import styled from "styled-components";
import { steps } from "./config";
export const FormContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Section = styled.div`
  grid-column: span 2;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.2em;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px dashed #ccc;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${({ required }) => required && "border-left: 3px solid black;"}
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${({ required }) => required && "border-left: 3px solid black;"}
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8em;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

export const IndicatorStep = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  background-color: ${({ state }) =>
    state === "current" ? "#007bff" : state === "past" ? "#4caf50" : "#ccc"};
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
`;

export const OtherInput = styled(Input)`
  margin-left: 25px;
  margin-top: 5px;
  width: 85%;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  margin: 0;
`;

export const BatteryContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 10px;
    width: 190px;
    /* height: 16px; */
    border: 2px solid #000;
    border-radius: 12px;
    position: relative;
    margin-top: 10px;
    background-color: #fff;
`;

export const BatteryTerminal = styled.div`
    position: absolute;
    right: -10px;
    top: 13px;
    width: 10px;
    height: 20px;
    background-color: #000;
    border-radius: 2px;
`;

export const BatterySegment = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 3px;
  border-radius: 3px;
  background-color: ${({ isActive }) => (isActive ? "#4caf50" : "#e0e0e0")};
  border: 1px solid #000;
`;

export const ImageUploadContainer = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const PreviewImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  margin: 0;
`;

export const PhoneNumberContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const TextArea = styled.textarea`
  width: 95 %;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const CountryCodeInput = styled(Input)`
  flex: 1;
`;

export const PhoneNumberInput = styled(Input)`
  flex: 3;
`;

export const ImageUpload = forwardRef(({ singleIamge = false, value = [], onChange, name }, ref) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    onChange(singleIamge ? [...newImages] : [...value, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = value.filter((_, i) => i !== index);
    onChange(updatedImages);
  };

  const id = `image-upload-${name}`;

  return (
    <ImageUploadContainer>
      <input
        type="file"
        multiple={!singleIamge}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
        id={id}
        ref={ref} // Attach the ref here
      />
      <label htmlFor={id} style={{ cursor: "pointer" }}>
        {`Click to upload image${!singleIamge ? "s" : ""}`}
      </label>
      <PreviewContainer>
        {value.map((image, index) => (
          <PreviewImage key={index}>
            <PreviewImg src={image.preview} alt={`Preview ${index}`} width="100" />
            <RemoveButton type="button" onClick={() => handleRemoveImage(index)}>x</RemoveButton>
          </PreviewImage>
        ))}
      </PreviewContainer>
    </ImageUploadContainer>
  );
});

export const BatteryCondition = ({ value, onChange }) => {
  return (
    <BatteryContainer>
      {[...Array(5)].map((_, index) => (
        <BatterySegment
          key={index}
          isActive={index < value}
          onClick={() => onChange(index + 1)}
        />
      ))}
      <BatteryTerminal />
    </BatteryContainer>
  );
};

export const YearSelect = ({ value, onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1901 + i);

  return (
    <Select value={value} onChange={onChange}>
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Select>
  );
};

export const Indicator = ({ currentStep, setStep }) => {
  return (
    <IndicatorContainer>
      {steps.map((_, index) => {
        const state =
          index === currentStep ? "current" : index < currentStep ? "past" : "next";
        return (
          <IndicatorStep key={index} state={state} onClick={() => setStep(index)}>
            {index + 1}
          </IndicatorStep>
        );
      })}
    </IndicatorContainer>
  );
};