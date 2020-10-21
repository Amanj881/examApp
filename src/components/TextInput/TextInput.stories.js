import React from "react";
import TextInput from "./TextInput";
import "../../index.css";

export default {
  title: "TextInput",
  component: TextInput,
};

export const Default = () => (
  <TextInput id="default" labelText="Full name" placeholder="Enter your name" />
);

export const Number = () => (
  <TextInput id="number" type="number" labelText="Phone Number" placeholder="Your Phone Number" />
);

export const Invalid = () => (
  <TextInput
    id="error"
    invalid={true}
    invalidText="Enter your name"
    placeholder="Enter your name"
    labelText="Full name"
  />
);

export const Email = () => (
  <TextInput
    id="email"
    name="email"
    type="email"
    labelText="Email"
    placeholder="Enter valid Email"
  />
);

export const EmailExist = () => (
  <TextInput
    id="emailexist"
    type="email"
    invalidEmail={true}
    labelText="Email"
    placeholder="Enter valid Email"
    emailExist="An account with this email exists."
  />
);

export const HelperText = () => (
  <TextInput
    id="helperText"
    labelText="Label"
    placeholder="Placeholder"
    helperText="Description"
  />
);

export const MessageCount = () => (
  <TextInput
    id="count"
    labelText="Label"
    placeholder="Placeholder"
    helperText="Description"
    feedbackMessage="Feedback message"
    maxLength={20}
  />
);
