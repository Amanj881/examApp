import React, { forwardRef } from "react";
import "./Loader.css";

function Loader() {
	return (
		<div className="flex justify-center m-auto">
			<div className="dot-flashing text-center z-40 content-center m-64 "></div>
		</div>
	);
}
export default Loader;
