import React from 'react';

import styles from './MeetupItem.module.css';

function MeetupItem(props) {
	return (
		<li className={styles.item}>
			<div className={styles.item}>
				<img src={props.image} alt={props.title} />
			</div>
			<div className={styles.content}>
				<h3>{props.title}</h3>
				<address>{props.address}</address>
				<p>{props.description}</p>
			</div>
			<div className={styles.actions}>
				<button>To favorites</button>
			</div>
		</li>
	);
}

export default MeetupItem;
