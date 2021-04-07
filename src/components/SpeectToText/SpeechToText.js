import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SpeechRecognition, {
	useSpeechRecognition
} from 'react-speech-recognition';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './speech-to-text.css';

const SpeechToText = ({ onCloseDialog }) => {
	const { transcript, resetTranscript } = useSpeechRecognition();

	const closeDialoghandler = () => {
		onCloseDialog();
		SpeechRecognition.abortListening();
	};
	const startListeningHandler = () => {
		SpeechRecognition.startListening({ continuous: true });
	};
	const stopListeningHandler = () => {
		SpeechRecognition.stopListening();
	};

	let recordingBox = (
		<div className="stt-error">
			<p>Speech Recognition Not supported in your Browser</p>
			<Button text="Cancel" onClick={onCloseDialog} />
		</div>
	);
	const copyToClipboard = () => {
		navigator.clipboard.writeText(transcript);
	};

	if (SpeechRecognition.browserSupportsSpeechRecognition()) {
		recordingBox = (
			<>
				<div className="stt-controls">
					<Button text="Start" onClick={startListeningHandler} />
					<Button text="Stop" onClick={stopListeningHandler} />
					<Button text="Clear" onClick={resetTranscript} />
					<Button text="Cancel" onClick={closeDialoghandler} />
				</div>
				<div className="stt-output">
					{transcript}
					<div className="stt-copy" onClick={copyToClipboard}>
						<FontAwesomeIcon
							icon={faClipboardCheck}
							style={{
								width: '100%',
								height: '100%',
								color: 'grey'
							}}
						/>
					</div>
				</div>
			</>
		);

		return (
			<Backdrop>
				<Modal>
					<div className="stt">{recordingBox}</div>
				</Modal>
			</Backdrop>
		);
	}
};

export default SpeechToText;
