import React from 'react';
import './backdrop.css';

const Backdrop = (props) => {
	return <div className="backdrop">{props.children}</div>;
};

export default Backdrop;
