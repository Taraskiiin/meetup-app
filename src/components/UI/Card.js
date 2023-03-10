import React from 'react';
import styles from '../../styles/components/UI/Card.module.css';

function Card(props) {
	return <div className={styles.card}>{props.children}</div>;
}

export default Card;
