import React from "react";
import classNames from "classnames";

const Radio = React.forwardRef(function Radio(
  {
    id,
    className = `text-black-4`,
    label,
    onChange,
    onClick,
    hideLabel,
    invalid,
    invalidText,
    value,
    name,
    checked,
    option,
    title = "",
    ...other
  },
  ref
) {
  const labelClasses = classNames(
    `ml-3 text-base text-black-7 leading-6 font-normal cursor-pointer`,
    {
      [`hidden`]: hideLabel
    }
  );

  const btnClasses = classNames(
    `form-radio h-4 w-4 text-blue-5 transition duration-150 ease-in-out cursor-pointer`,
    {
      [`bg-error-light border-1 border-error`]: invalid
    }
  );

  const handleOnchange = e => {
    if (onChange) {
      onChange(e);
    }
  };
  const handleOnclick = e => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-center mt-2">
        <input
          id={id}
          type="radio"
          name={name}
          className={btnClasses}
          onChange={handleOnchange}
          onClick={handleOnclick}
          value={value}
          checked={checked}
        />
        <label htmlFor={id} className={labelClasses} title={title || null}>
          <span>{label}</span>
        </label>
      </div>
    </div>
  );
});

Radio.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  value: ""
};

export default Radio;
