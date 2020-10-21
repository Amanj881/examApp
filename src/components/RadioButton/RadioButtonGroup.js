import React from "react";
import RadioButton from "./Radio";

const RadioButtonGroup = React.forwardRef(function Radio(
  { options, id, value, name, onChange, onClick, errors, invalid, invalidText },
  ref
) {
  const errorId = id + "-error-msg";

  const error = invalid ? (
    <div
      className={` text-sm leading-normal mt-2 text-red-dark font-normal`}
      id={errorId}
    >
      {invalidText}
    </div>
  ) : null;

  const handleOnchange = value => {
    if (onChange) {
      onChange(value);
    }
  };

  const handleOnclick = e => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col">
        {options.map((option, index) => {
          return (
            <RadioButton
              id={option.label}
              key={option.id ? option.id : index}
              name={name}
              onChange={e => {
                handleOnchange(option.value);
              }}
              onClick={handleOnclick}
              invalid={invalid}
              checked={value === option.value ? true : false}
              {...option}
            />
          );
        })}
      </div>
      {error}
    </div>
  );
});

RadioButtonGroup.defaultProps = {
  indeterminate: false,
  onChange: () => {},
  invalid: false,
  invalidText: "",
  onClick: () => {}
};

export default RadioButtonGroup;
