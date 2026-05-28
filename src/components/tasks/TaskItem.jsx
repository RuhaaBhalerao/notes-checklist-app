function TaskItem({ task, onToggle, onDelete }) {
	return (
		<div className={task.completed ? "task-item completed" : "task-item"}>
			<label className="task-label">
				<input
					type="checkbox"
					checked={task.completed}
					onChange={() => onToggle(task.id)}
				/>
				<span>{task.title}</span>
			</label>

			<button type="button" className="text-button danger" onClick={() => onDelete(task.id)}>
				Delete
			</button>
		</div>
	);
}

export default TaskItem;
