import React, { forwardRef, useState, useEffect } from "react";
import classNames from "classnames";
import { passwordInputProps } from "./util";

const PasswordInput = forwardRef(function PasswordInput(
  {
    labelText,
    className = `text-black-4`,
    id,
    autoComplete,
    name,
    value,
    type,
    placeholder,
    onChange,
    onClick,
    hideLabel,
    invalid,
    invalidText,
    showButton,
    showIcon,
    helperText,
    autoCorrect,
    spellCheck,
    fillColor = `#008561`,
    kind,
    inputStyles,
    ...other
  },
  ref
) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("default");
  useEffect(() => {
    if (value.length === 0) {
      setPasswordStrength("default");
    } else if (value.length === 8 || value.length > 8) {
      setPasswordStrength("success");
    } else if (value.length < 8) {
      setPasswordStrength("invalid");
    }
  }, [value]);

  const errorId = id + "-error-msg";

  const passwordInputClasses = classNames(
    `form-input rounded block w-full h-12 border border-blue-500`,
    className,
    {
      [`border-1 border-black-4 bg-white-100`]: !invalid,
      [`bg-error-light border-1 border-error`]: invalid
    }
  );

  const passwordStrengthClasses = classNames(
    `text-sm leading-5 mt-1`,
    className,
    {
      [`text-black-7`]: passwordStrength === "default"
    }
  );

  const sharedPasswordInputProps = {
    id,
    autoComplete,
    name,
    value,
    onChange: evt => {
      if (onChange) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    type: passwordShown ? "text" : "password",
    placeholder,
    ref,
    className: inputStyles ? inputStyles : passwordInputClasses,
    ...other
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const labelClasses = classNames(`text-sm leading-6 font-medium`, {
    [`hidden`]: hideLabel
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const error = invalid ? (
    <div className={`text-error text-sm leading-6 mt-1`} id={errorId}>
      {invalidText}
    </div>
  ) : null;

  const input = (
    <input
      {...passwordInputProps({ invalid, sharedPasswordInputProps, errorId })}
    />
  );
  return (
    <div>
      {label}
      <div
        data-invalid={invalid || null}
        className="relative rounded-md shadow-sm mt-1"
      >
        {input}
        {showButton ? (
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <span
              className="text-sm font-medium leading-6 text-blue-100 py-3 cursor-pointer"
              onClick={togglePasswordVisiblity}
            >
              {passwordShown ? "Hide" : "Show"}
            </span>
          </div>
        ) : null}
        {showIcon ? (
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <span
              className={`text-sm font-medium leading-6  py-3 cursor-pointer ${
                passwordShown ? "text-blue-100" : "text-gray-600"
              }`}
              onClick={togglePasswordVisiblity}
            >
            </span>
          </div>
        ) : null}
      </div>
      {error}
      {(() => {
        if (passwordStrength === "default") {
          return <div className={passwordStrengthClasses}>{helperText}</div>;
        } else if (passwordStrength === "success" && helperText) {
          return (
            <div className="flex items-center text-success text-sm leading-5 mt-1">
              {helperText}
              <svg className="ml-1" width="10" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z" fill={fillColor}/>
              </svg>

            </div>
          );
        } else {
          return (
            <div className="text-error text-sm leading-5 mt-1">
              {helperText}
            </div>
          );
        }
      })()}
    </div>
  );
});

PasswordInput.defaultProps = {
  disabled: false,
  type: "text",
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: "",
  value: ""
};

export default PasswordInput;
