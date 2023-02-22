import React from 'react';

import MeetupItem from './MeetupItem';

import styles from '../../styles/components/meetups/MeetupList.module.css';

function MeetupList(props) {
	return (
		<ul className={styles.list}>
			{props.meetup.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default MeetupList;
