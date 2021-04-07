import React, { useState } from 'react';
import SpeechToText from './components/SpeectToText/SpeechToText';
import './App.css';
import Button from './components/Button/Button';
import TextToSpeech from './components/TextToSpeect/TextToSpeech';
import Locater from './components/Locater/Locater';

const OPTION_NONE = 0;
const OPTION_RECORDER = 1;
const OPTION_SPEAKER = 2;
const OPTION_LOCATER = 3;

const App = () => {
	const [showModal, setShowModal] = useState(OPTION_NONE);

	const openModalHandler = (option) => {
		setShowModal(option);
	};
	const closeModalHandler = () => {
		setShowModal(OPTION_NONE);
	};

	let modalBox = null;
	if (showModal === OPTION_RECORDER) {
		modalBox = <SpeechToText onCloseDialog={closeModalHandler} />;
	} else if (showModal === OPTION_SPEAKER) {
		modalBox = <TextToSpeech onCloseDialog={closeModalHandler} />;
	} else if (showModal === OPTION_LOCATER) {
		modalBox = <Locater onCloseDialog={closeModalHandler} />;
	}

	return (
		<div className="App">
			<Button
				onClick={() => openModalHandler(OPTION_RECORDER)}
				text="Speech to Text"
			/>
			<Button
				onClick={() => openModalHandler(OPTION_SPEAKER)}
				text="Text to Speech"
			/>
			<Button onClick={() => openModalHandler(OPTION_LOCATER)} text="Locater" />
			{modalBox}
		</div>
	);
};

export default App;
