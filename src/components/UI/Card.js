import React from 'react';
import styles from '../../styles/components/UI/Card.modules.css';

function Card(props) {
	return <din className={styles.card}>{props.children}</din>;
}

export default Card;
