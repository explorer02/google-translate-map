import React, { useState } from 'react';
import SpeechToText from './components/SpeectToText/SpeechToText';
import './App.css';
import Button from './components/Button/Button';
import TextToSpeech from './components/TextToSpeect/TextToSpeech';
const App = () => {
	const [showRecorder, setShowRecorder] = useState(false);
	const [showSpeaker, setShowSpeaker] = useState(false);

	const openRecorderHandler = () => {
		setShowRecorder(true);
	};
	const closeRecorderHandler = () => {
		setShowRecorder(false);
	};
	const openSpeakerHandler = () => {
		setShowSpeaker(true);
	};
	const closeSpeakerHandler = () => {
		setShowSpeaker(false);
	};

	return (
		<div className="App">
			{showRecorder && <SpeechToText onCloseDialog={closeRecorderHandler} />}
			<Button onClick={openRecorderHandler} text="Speech to Text" />

			{showSpeaker && <TextToSpeech onCloseDialog={closeSpeakerHandler} />}
			<Button onClick={openSpeakerHandler} text="Text to Speech" />
		</div>
	);
};

export default App;
