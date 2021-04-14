import React, { useState } from 'react';
import SpeechToText from './components/SpeectToText/SpeechToText';
import './App.css';
import Button from './components/Button/Button';
import TextToSpeech from './components/TextToSpeect/TextToSpeech';
import Locater from './components/Locater/Locater';
import Translator from './components/Translator/Translator';

const OPTION_NONE = 0;
const OPTION_RECORDER = 1;
const OPTION_SPEAKER = 2;
const OPTION_LOCATER = 3;
const OPTION_TRANSLATOR = 4;

const App = () => {
	const [showModal, setShowModal] = useState(OPTION_NONE);

	const openModalHandler = (option) => {
		setShowModal(option);
	};
	const closeModalHandler = () => {
		setShowModal(OPTION_NONE);
	};

	let modalBox = null;
	switch (showModal) {
		case OPTION_RECORDER:
			modalBox = <SpeechToText onCloseDialog={closeModalHandler} />;
			break;
		case OPTION_SPEAKER:
			modalBox = <TextToSpeech onCloseDialog={closeModalHandler} />;
			break;
		case OPTION_LOCATER:
			modalBox = <Locater onCloseDialog={closeModalHandler} />;
			break;
		case OPTION_TRANSLATOR:
			modalBox = <Translator onCloseDialog={closeModalHandler} />;
			break;
		default:
			modalBox = null;
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
			<Button
				onClick={() => openModalHandler(OPTION_TRANSLATOR)}
				text="Translator"
			/>
			{modalBox}
		</div>
	);
};

export default App;
