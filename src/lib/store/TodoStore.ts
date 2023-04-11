import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Todo = {
	id: string;
	text: string;
	complete: boolean;
};

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value: Todo[]): void => {
	if (browser) {
		localStorage.setItem('st-todo-list', JSON.stringify(value));
	}
});

export const addTodo = (): void => {
	todos.update((currentTodo: Todo[]) => {
		return [...currentTodo, { id: uuidv4(), text: '', complete: false }];
	});
};

export const deleteTodo = (id: string): void => {
	todos.update((currentTodos: Todo[]) => {
		return currentTodos.filter((todo: Todo) => todo.id !== id);
	});
};

export const toggleComplete = (id: string): void => {
	todos.update((currentTodos: Todo[]) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}

			return todo;
		});
	});
};

export const editTodo = (id: string, text: string): void => {
	todos.update((currentTodos: Todo[]) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}

			return todo;
		});
	});
};
