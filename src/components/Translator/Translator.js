import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
import './translator.css';
import Button from './../Button/Button';

const alphabets = [...'⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵'];
const nums = [...'⠴⠂⠆⠒⠲⠢⠖⠶⠦⠔'];

const Translator = ({ onCloseDialog }) => {
	const [input, setInput] = useState('');
	const copyOutputHandler = () => {
		navigator.clipboard.writeText(input);
	};

	return (
		<Backdrop>
			<Modal>
				<div className="translator">
					<div className="braille-alphabets">
						{alphabets.map((a, index) => (
							<BrailleButton
								char={a}
								key={a}
								onClick={() => {
									setInput((s) => s + String.fromCharCode(index + 65));
								}}
							/>
						))}
					</div>
					<br />
					<div className="braille-numbers">
						{nums.map((n, index) => (
							<BrailleButton
								char={n}
								key={n}
								onClick={() => {
									setInput((s) => s + String.fromCharCode(index + 48));
								}}
							/>
						))}
					</div>
					<div className="braille-extras">
						<BrailleButton
							char={''}
							onClick={() => {
								setInput((s) => s + ' ');
							}}
						/>
						<BrailleButton
							char={'←'}
							onClick={() => {
								setInput((s) => s.slice(0, -1));
							}}
						/>
					</div>
					<input
						type="text"
						className="translator-output"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<div className="translator-controls">
						<Button onClick={copyOutputHandler} text="Copy" />
						<Button onClick={onCloseDialog} text="Cancel" />
					</div>
				</div>
			</Modal>
		</Backdrop>
	);
};

const BrailleButton = ({ char, onClick }) => {
	return (
		<button className="braille-button" onClick={onClick}>
			{char}
		</button>
	);
};

export default Translator;
