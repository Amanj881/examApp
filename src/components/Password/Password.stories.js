import React from "react";
import Password from "./Password";
import "../../index.css";

export default {
  title: "Password",
  component: Password,
};

export const Default = () => (
	<Password 
		id="default" 
		labelText="Password" 
		placeholder="Enter Password"
	/>
);

export const Invalid = () => (
  <Password
    id="error"
    invalid={true}
    invalidText="Enter Password"
    labelText="Password"
  />
);

export const showButton = () => (
	<Password 
		id="showButton" 
		labelText="Password" 
		showButton={true}/>
);

export const showIcon = () => (
	<Password 
		id="showButton" 
		labelText="Password" 
		showIcon={true}/>
);

export const PasswordStrength = () => (
	<Password
		id="strength"
		labelText="Password"
		showButton={true}
		helperText="At least 8 characters required"
	/>
);

