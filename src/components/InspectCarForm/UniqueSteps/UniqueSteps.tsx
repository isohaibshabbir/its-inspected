import * as React from 'react';
import {
  stepControllersProps,
  firstStepForm,
  billingPlanRadios,
  radioToggle,
  addOnsCheckboxes,
  //@ts-ignore
} from "../../../data.js";

import StepWrapper from "../StepWrapper/StepWrapper";
import BaseInput from "../BaseInput/BaseInput";
import BaseRadio from "../BaseRadio/BaseRadio";
import BaseCheckboxGroup from "../BaseCheckboxGroup/BaseCheckboxGroup";
import OrderSummary from "../OrderSummary/OrderSummary";

import { UniqueStepsProps, BaseInputProps } from "../../../types.js"
// import { camera } from '../../helpers/helpers';
// import CameraApp from '../Camers/Camera';
import FormBuilder from '../FormBuilder/FormBuilder';


const formSchema = [
  {
      title: "Step 1: Personal Information",
      fields: [
          { type: "text", label: "First Name", name: "firstName", required: true },
          { type: "text", label: "Last Name", name: "lastName", required: true },
      ],
  },
  {
      title: "Step 2: Capture Photo",
      fields: [
          { type: "camera", label: "Take a Picture", name: "photo" },
      ],
  },
  {
      title: "Step 3: Review & Submit",
      fields: [
          { type: "text", label: "Email", name: "email", required: true },
      ],
  },
];

function UniqueSteps({
  register,
  errors,
  firstStepFormData,
  billingPlan,
  regularityObj,
  handleMultipleInputs,
  handleSetBillingPlan,
  handleRegularity,
  regularity,
  handleAddOns,
  addOns,
  currentStep,
  isMobile,
}: UniqueStepsProps) {

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      {currentStep === 1 && (
        <StepWrapper
          heading="Personal info"
          description="Please provide your name, email address, and phone number."
          stepControllersProps={stepControllersProps[1]}
          isMobile={isMobile}
        >
          {firstStepForm.map((input: BaseInputProps, i: number) => (
            <BaseInput
              index={i}
              label={input.label}
              name={input.name}
              type={input.type}
              rules={input.rules}
              value={firstStepFormData[i]}
              placeholder={input.placeholder}
              register={register}
              key={input.name}
              errors={errors}
              handleMultipleInputs={handleMultipleInputs}
            />
          ))}

          <BaseRadio
            legend={billingPlanRadios.legend}
            name={billingPlanRadios.name}
            radios={billingPlanRadios.radios}
            billingPlanDescription={true}
            checked={billingPlan}
            regularityObj={regularityObj}
            handleRadioClick={handleSetBillingPlan}
          />
          <BaseRadio
            legend={radioToggle.legend}
            name={radioToggle.name}
            radios={radioToggle.radios}
            checked={regularity}
            customStyle="toggle"
            handleRadioClick={handleRegularity}
          />

          <FormBuilder schema={formSchema} onSubmit={handleFormSubmit} />
          {/* <CameraApp /> */}
        </StepWrapper>
      )}
      {currentStep === 2 && (
        <StepWrapper
          heading="Select your plan"
          description="You have the option of monthly or yearly billing."
          stepControllersProps={stepControllersProps[2]}
          isMobile={isMobile}
        >
          <BaseRadio
            legend={billingPlanRadios.legend}
            name={billingPlanRadios.name}
            radios={billingPlanRadios.radios}
            billingPlanDescription={true}
            checked={billingPlan}
            regularityObj={regularityObj}
            handleRadioClick={handleSetBillingPlan}
          />
          <BaseRadio
            legend={radioToggle.legend}
            name={radioToggle.name}
            radios={radioToggle.radios}
            checked={regularity}
            customStyle="toggle"
            handleRadioClick={handleRegularity}
          />
        </StepWrapper>
      )}
      {currentStep === 3 && (
        <StepWrapper
          heading="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
          stepControllersProps={stepControllersProps[3]}
          isMobile={isMobile}
        >
          <BaseCheckboxGroup
            legend={addOnsCheckboxes.legend}
            name={addOnsCheckboxes.name}
            checkboxes={addOnsCheckboxes.checkboxes}
            regularityObj={regularityObj}
            checked={addOns}
            handleCheckboxClick={handleAddOns}
          />
        </StepWrapper>
      )}
      {currentStep === 4 && (
        <StepWrapper
          heading="Finishing up"
          description="Double-check everything looks OK before confirming."
          stepControllersProps={stepControllersProps[4]}
          isMobile={isMobile}
        >
          <OrderSummary
            regularityObj={regularityObj}
            planLabel={billingPlanRadios.radios[Number(billingPlan)].label}
            planDetails={
              billingPlanRadios.radios[Number(billingPlan)].price
            }
            addOnsState={addOns}
            addOnsDetails={addOnsCheckboxes.checkboxes}
          />
        </StepWrapper>
      )}
      {currentStep === 5 && (
        <StepWrapper
          formWrapper={false}
          finalImage={true}
          heading="Thank you!"
          description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          stepControllersProps={stepControllersProps[5]}
          isMobile={isMobile}
        ></StepWrapper>
      )}
    </>
  );
}

export default UniqueSteps;
