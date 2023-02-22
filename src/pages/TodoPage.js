import React from 'react';

import Todo from '../components/Todos/Todo';
import '../styles/components/todos/Todos.css';

function TodoPage() {
	return (
		<div className='todo-page'>
			<h1>My Todos</h1>
			<Todo text='Learn React' />
			<Todo text='Master React' />
			<Todo text='Explore the full React course' />
		</div>
	);
}

export default TodoPage;
