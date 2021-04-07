import React from 'react';
import './button.css';

const Button = ({ onClick, text, ...props }) => {
	return (
		<button className="custom-button" onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
