import React from 'react';

import Card from '../UI/Card';

import styles from '../../styles/components/meetups/MeetupItem.modules.css';

function MeetupItem(props) {
	return (
		<li className={styles.item}>
			<Card>
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
			</Card>
		</li>
	);
}

export default MeetupItem;
