import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import FavoritesContext from '../../store/favoriteContext';
import styles from '../../styles/components/layout/MainNavigation.module.css';

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);

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
						<NavLink to='/favorite'>
							Favorite Meetups
							<span className={styles.badge}>
								{favoritesCtx.totalFavorites}
							</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
