import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from 'MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>All Meetups</NavLink>
					</li>
					<li>
						<NavLink to='/new-meetup'>Add New Meetups</NavLink>
					</li>
					<li>
						<NavLink to='/favorite'>Favorite Meetups</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
