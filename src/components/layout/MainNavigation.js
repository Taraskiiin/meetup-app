import React from 'react';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
	return (
		<header>
			<div>React Meetups</div>
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
