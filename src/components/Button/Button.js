import React from 'react';
import './button.css';

const Button = ({ onClick, text, disabled, ...props }) => {
	return (
		<button className="custom-button" onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
