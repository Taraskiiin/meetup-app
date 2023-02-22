import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TodoPage from './pages/TodoPage';
import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
	return (
		<div className='app'>
			<MainNavigation />
			<Routes>
				<Route path='/' element={<AllMeetupsPage />} />
				<Route path='/new-meetup' element={<NewMeetupPage />} />
				<Route path='/favorite' element={<FavoritesPage />} />
				<Route path='todos' element={<TodoPage />} />
			</Routes>
		</div>
	);
}

export default App;
