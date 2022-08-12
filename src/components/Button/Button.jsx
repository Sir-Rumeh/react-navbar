import React from "react";
import "./Button.css";

const Button = ({ children, type = "button", onClick, buttonStyle }) => (
	<button type={type} onClick={onClick} className={`btn-${buttonStyle}`}>
		{children}
	</button>
);

export default Button;
