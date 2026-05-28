function NoteCard({ note, onEdit, onDelete }) {
	return (
		<article className="card note-card">
			<div>
				<h3 className="card-title">{note.title}</h3>
				<p className="card-preview">{note.content}</p>
			</div>

			<p className="card-meta">Updated: {note.updatedAt}</p>

			<div className="card-actions">
				<button type="button" className="text-button" onClick={() => onEdit(note)}>
					Edit
				</button>
				<button type="button" className="text-button danger" onClick={() => onDelete(note.id)}>
					Delete
				</button>
			</div>
		</article>
	);
}

export default NoteCard;
