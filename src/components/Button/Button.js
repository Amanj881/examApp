import React from 'react';
import classNames from "classnames";


function Button({
	 type,
    labelText,
    size,
    kind,
    buttonClick,
    buttonStyles,
    disable,
    width,
    children,
}) {

	const buttonClasses = classNames(
    "py-2 px-4 font-bold rounded-full text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out uppercase bg-gradient-to-r from-indigo-600 to-indigo-700",
    {
      [`inline-flex items-center`]: width === "default",
      [`w-full flex justify-center `]: width === "full",
    }
  );
	
  return (
    <>
    <button
      type={type}
      className={buttonStyles ? buttonStyles : buttonClasses}
      onClick={buttonClick}
      disabled={disable}
    >
      {children}
    </button>
    </>
  );
}
Button.defaultProps = {
  type: "button",
  kind: "small",
  width: "default",
  buttonClick: () => {},
};
export default Button;
