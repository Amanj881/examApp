import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import { textInputProps } from "./util";
// import Link from "../Link/Link";

const TextInput = forwardRef(function TextInput(
  {
    labelText,
    className = `text-black-4`,
    id,
    placeholder,
    type,
    onChange,
    onClick,
    onBlur,
    hideLabel,
    invalid,
    invalidText,
    invalidEmail,
    helperText,
    feedbackMessage,
    emailExist,
    inputStyles,
    maxLength,
    name,
    value,
    autoComplete,
    ...other
  },
  ref
) {
  const [messageCount, getCount] = useState(0);
  console.log("object",invalid)
  const errorId = id + "-error-msg";
  const textInputClasses = classNames(
    `form-input rounded block w-full h-12 border border-blue-500`,
    className,
    {
      [`border-1 border-black-4 bg-white-100`]: !invalid,
      [`bg-error-light border-1 border-error`]: invalid
    }
  );
  const sharedTextInputProps = {
    id,
    value,
    autoComplete,
    name,
    onChange: evt => {
      getCount(evt.target.value.length);

      if (onChange) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    onBlur: evt => {
      if (onBlur) {
        onBlur(evt);
      }
    },
    placeholder,
    type,
    ref,
    className: inputStyles ? inputStyles : textInputClasses,
    ...other
  };
  const labelClasses = classNames(`text-sm leading-6 font-medium`, {
    [`hidden`]: hideLabel
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const helpertext = helperText ? (
    <div className={`text-sm leading-5 text-black-5 mt-1`}>{helperText}</div>
  ) : null;

  const feedbackmessage = feedbackMessage ? (
    <div className={`flex justify-between text-error text-sm leading-5 mt-1`}>
      {feedbackMessage}
      <span className="text-black-5">{messageCount}/20</span>
    </div>
  ) : null;

  const error = invalid ? (
    <div className={`text-error text-sm leading-normal mt-1`} id={errorId}>
      {invalidText}
    </div>
  ) : null;

  const emailexist = invalidEmail ? (
    <div className="flex items-center">
      <span className="flex text-error text-sm leading-normal mt-1">
        {emailExist}
      </span>
      &nbsp;
      &nbsp;
      <span className="flex text-error text-sm leading-normal mt-1">or</span>
      &nbsp;
    </div>
  ) : null;

  const input = (
    <input {...textInputProps({ invalid, sharedTextInputProps, errorId })} />
  );

  return (
    <div>
      {label}
      {helpertext}
      <div
        data-invalid={invalid || null}
        className="relative rounded-md shadow-sm mt-1"
      >
        {input}
      </div>
      {error}
      {emailexist}
      {feedbackmessage}
    </div>
  );
});

TextInput.defaultProps = {
  disabled: false,
  type: "text",
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: "",
  value: ""
};

export default TextInput;
