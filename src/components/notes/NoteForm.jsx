function NoteForm({ title, content, onTitleChange, onContentChange, onSubmit, submitLabel }) {
	return (
		<form className="card form-card" onSubmit={onSubmit}>
			<label className="field-label" htmlFor="note-title">
				Note title
			</label>
			<input
				id="note-title"
				className="text-input"
				type="text"
				value={title}
				onChange={(event) => onTitleChange(event.target.value)}
				placeholder="Enter note title"
			/>

			<label className="field-label" htmlFor="note-content">
				Note content
			</label>
			<textarea
				id="note-content"
				className="text-area"
				value={content}
				onChange={(event) => onContentChange(event.target.value)}
				placeholder="Write a short preview of your note"
				rows="4"
			/>

			<button type="submit" className="primary-button">
				{submitLabel}
			</button>
		</form>
	);
}

export default NoteForm;
