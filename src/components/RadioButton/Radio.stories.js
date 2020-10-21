import React from "react";
import Radio from "./Radio";
import RadioButtonGroup from "./RadioButtonGroup";

import "../../index.css";

export default {
  title: "RadioButtonGroup",
  component: RadioButtonGroup,
};

export const Default = () => (
  <div className="w-64">
      <Radio  label="An individual educator" />
  </div>
);
export const Invalid = () =>(
	<Radio
	   id="error"
    invalid={true}
    invalidText="Enter your name"
    label="An individual educator" 
    />

	)