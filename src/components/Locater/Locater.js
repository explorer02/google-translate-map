import React, { useState } from 'react';
import './locater.css';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
import Spinner from '../../Spinner/Spinner';
const Locater = ({ onCloseDialog }) => {
	const [showLoader, setShowLoader] = useState(false);
	const [location, setLocation] = useState({ lat: null, lng: null });

	const getLocation = () => {
		setShowLoader(true);
		navigator.geolocation.getCurrentPosition(function (position) {
			setLocation({
				lat: position.coords.latitude,
				lng: position.coords.longitude
			});
			setShowLoader(false);
		});
	};

	let locationBox = (
		<>
			<Button text="Get Live Location" onClick={getLocation} />
			{showLoader ? (
				<Spinner />
			) : location.lat ? (
				<a
					href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
					target="_blank"
					rel="noreferrer"
				>
					Open in maps
				</a>
			) : null}
		</>
	);
	if (!('geolocation' in navigator))
		locationBox = <p>Location not accessible</p>;

	return (
		<Backdrop>
			<Modal>
				<div className="locater">
					{locationBox}
					<Button text="Cancel" onClick={onCloseDialog} />
				</div>
			</Modal>
		</Backdrop>
	);
};

export default Locater;
