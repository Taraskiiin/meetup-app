import React from 'react';
import MainNavigation from './MainNavigation';
import styles from '../../styles/components/layout/Layout.module.css';

function Layout(props) {
	return (
		<div>
			<MainNavigation />
			<div className={styles.main}>{props.children}</div>
		</div>
	);
}

export default Layout;
