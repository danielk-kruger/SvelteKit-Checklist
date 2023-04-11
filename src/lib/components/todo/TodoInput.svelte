<script>
	import { deleteTodo, toggleComplete, editTodo } from '../../store/TodoStore';

	export let todo;

	$: completeClass = todo.completed ? 'bg-green-three' : 'bg-leaf-one';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4">
	<div>
		<label for={`${todo.id}-checkbox`}>Complete todo</label>
		<input
			type="checkbox"
			id={`${todo.id}-checkbox`}
			checked={todo.completed}
			on:change={() => toggleComplete(todo.id)}
		/>
		<label for={`${todo.id}-text`}>Edit todo</label>
		<input
			id={`${todo.id}-text`}
			type="text"
			placeholder="Enter a todo"
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
		/>
		<span>
			{todo.complete ? 'Complete' : 'In Progress'}
		</span>
	</div>
	<button type="button" on:click={() => deleteTodo(todo.id)}>
		<span>Delete todo</span>
		<svg
			class="h-5 w-5 text-steel-three group-hover:text-gray-five"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_35_392)">
				<path
					d="M24 6.4H32V9.6H28.8V30.4C28.8 30.8244 28.6314 31.2313 28.3314 31.5314C28.0313 31.8314 27.6243 32 27.2 32H4.8C4.37565 32 3.96869 31.8314 3.66863 31.5314C3.36857 31.2313 3.2 30.8244 3.2 30.4V9.6H0V6.4H8V1.6C8 1.17565 8.16857 0.768688 8.46863 0.468629C8.76869 0.168571 9.17565 0 9.6 0H22.4C22.8243 0 23.2313 0.168571 23.5314 0.468629C23.8314 0.768688 24 1.17565 24 1.6V6.4ZM25.6 9.6H6.4V28.8H25.6V9.6ZM18.2624 19.2L21.0912 22.0288L18.8288 24.2912L16 21.4624L13.1712 24.2912L10.9088 22.0288L13.7376 19.2L10.9088 16.3712L13.1712 14.1088L16 16.9376L18.8288 14.1088L21.0912 16.3712L18.2624 19.2ZM11.2 3.2V6.4H20.8V3.2H11.2Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_35_392">
					<rect width="32" height="32" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</button>
</div>
