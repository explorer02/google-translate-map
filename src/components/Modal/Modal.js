import React from 'react';
import './modal.css';

const Modal = ({ longer, ...props }) => {
	return (
		<div className={'modal ' + (longer ? 'longer' : '')}>{props.children}</div>
	);
};

export default Modal;
