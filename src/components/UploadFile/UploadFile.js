import React from 'react'
import PropTypes from 'prop-types'

function UploadFile({label,onChange,name,styleClass,value}) {

	// const handleChange = (e) => {
	// 	const {value} = e.target
	// 	onChange(value);
	// }
	return (
		<>
		<label className="font-bold">{label}</label>
		<div>
			<input type="file" name={name}  onChange={onChange} className={styleClass} value={value}/>
		</div>
		</>
	)
}
UploadFile.propTypes = {
	name:PropTypes.string.isRequired,
	styleClass:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    label:PropTypes.string,
}

UploadFile.defaultProps = {
	name:"",
	styleClass:"",
	label:""
}

export default UploadFile

