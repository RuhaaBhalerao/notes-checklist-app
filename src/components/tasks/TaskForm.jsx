function TaskForm({ title, onTitleChange, onSubmit }) {
	return (
		<form className="card form-card task-form" onSubmit={onSubmit}>
			<input
				className="text-input"
				type="text"
				value={title}
				onChange={(event) => onTitleChange(event.target.value)}
				placeholder="Enter a task"
				aria-label="Task title"
			/>

			<button type="submit" className="primary-button">
				Add task
			</button>
		</form>
	);
}

export default TaskForm;
