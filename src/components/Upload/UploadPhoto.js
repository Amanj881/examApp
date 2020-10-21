import React, { forwardRef } from 'react';
import Button from '../Button/Button';
import classNames from "classnames";

const UploadPhoto = forwardRef(function UploadPhoto(
  {
  	id,
    labelText
  },
  ref
) {
	const boxWidth = {
		width: '20.313rem'
	}

	const buttonStyles = {
		width: '8.5rem'
	}

	const labelClasses = classNames(`text-sm leading-6 font-medium`);

	const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

	return (
		<div>
			{label}
			<div className="border py-6 rounded" style={boxWidth}>
				<svg className="mx-20" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="80" cy="80" r="80" fill="#0A0C0F" fillOpacity="0.64"/>
				</svg>
				<div className="mt-6 mx-24" style={buttonStyles}>
					<Button labelText="Upload Photo" type="button" kind="tertiary" />
				</div>
			</div>
		</div>
	)
});

export default UploadPhoto;