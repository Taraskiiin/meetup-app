import React, { useRef } from 'react';

import Card from '../UI/Card';

import styles from '../../styles/components/meetups/NewMeetupForm.module.css';

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const newMeetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		props.onAddMeetup(newMeetupData);
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={submitHandler}>
				<div className={styles.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' required id='title' ref={titleInputRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' required id='address' ref={addressInputRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						type='text'
						required
						id='description'
						row='5'
						ref={descriptionInputRef}
					/>
				</div>
				<div className={styles.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
