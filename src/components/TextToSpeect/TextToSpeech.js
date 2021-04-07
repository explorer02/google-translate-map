import { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './text-to-speech.css';

const TextToSpeech = ({ onCloseDialog }) => {
	const [input, setInput] = useState('');
	const [isPaused, setIsPaused] = useState(false);

	const startSpeaking = () => {
		const utter = new window.SpeechSynthesisUtterance(input);
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(utter);
		setIsPaused(false);
	};
	const pauseSpeaking = () => {
		window.speechSynthesis.pause();
		setIsPaused(true);
	};
	const resumeSpeaking = () => {
		window.speechSynthesis.resume();
		setIsPaused(false);
	};

	const closeDialogHandler = () => {
		onCloseDialog();
		window.speechSynthesis.cancel();
	};

	return (
		<Backdrop>
			<Modal>
				<div className="tts">
					<div className="tts-input">
						<textarea
							value={input}
							onChange={(ev) => setInput(ev.target.value)}
						></textarea>
					</div>
					<div className="tts-controls">
						<Button text="Speak" onClick={startSpeaking} />
						{isPaused ? (
							<Button text={'Resume'} onClick={resumeSpeaking} />
						) : (
							<Button text={'Pause'} onClick={pauseSpeaking} />
						)}
						<Button text="Cancel" onClick={closeDialogHandler} />
					</div>
				</div>
			</Modal>
		</Backdrop>
	);
};

export default TextToSpeech;
