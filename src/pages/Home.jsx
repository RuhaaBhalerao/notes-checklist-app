import { useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import NoteCard from "../components/notes/NoteCard";
import NoteForm from "../components/notes/NoteForm";
import TaskForm from "../components/tasks/TaskForm";
import TaskItem from "../components/tasks/TaskItem";

function Home() {
	const [activeView, setActiveView] = useState("notes");
	const [searchQuery, setSearchQuery] = useState("");
	const [notes, setNotes] = useState([
		{
			id: 1,
			title: "Plan this week",
			content: "Outline the main goals for the week and keep it simple.",
			updatedAt: "Today",
		},
		{
			id: 2,
			title: "Project ideas",
			content: "Collect small product ideas before choosing the next one.",
			updatedAt: "Yesterday",
		},
		{
			id: 3,
			title: "Shopping reminders",
			content: "Milk, fruits, notebooks, and charger cable.",
			updatedAt: "2 days ago",
		},
	]);
	const [tasks, setTasks] = useState([
		{ id: 11, title: "Gym", completed: false },
		{ id: 12, title: "Assignment", completed: true },
		{ id: 13, title: "Grocery shopping", completed: false },
		{ id: 14, title: "Reply to emails", completed: false },
		{ id: 15, title: "Clean workspace", completed: true },
	]);

	const [noteTitle, setNoteTitle] = useState("");
	const [noteContent, setNoteContent] = useState("");
	const [editingNoteId, setEditingNoteId] = useState(null);

	const [taskTitle, setTaskTitle] = useState("");
	const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	const handleAddClick = () => {
		if (activeView === "notes") {
			openNewNoteForm();
			return;
		}

		openNewTaskForm();
	};

	const goToNotes = () => {
		setActiveView("notes");
	};

	const goToChecklist = () => {
		setActiveView("checklist");
	};

	const openNewNoteForm = () => {
		setEditingNoteId(null);
		setNoteTitle("");
		setNoteContent("");
		setIsNoteModalOpen(true);
	};

	const openNewTaskForm = () => {
		setTaskTitle("");
		setIsTaskModalOpen(true);
	};

	const handleSaveNote = (event) => {
		event.preventDefault();

		const trimmedTitle = noteTitle.trim();
		const trimmedContent = noteContent.trim();

		if (!trimmedTitle || !trimmedContent) {
			return;
		}

		const now = new Date().toLocaleString();

		if (editingNoteId) {
			setNotes((currentNotes) =>
				currentNotes.map((note) =>
					note.id === editingNoteId
						? { ...note, title: trimmedTitle, content: trimmedContent, updatedAt: now }
						: note,
				),
			);
		} else {
			setNotes((currentNotes) => [
				...currentNotes,
				{
					id: Date.now(),
					title: trimmedTitle,
					content: trimmedContent,
					updatedAt: now,
				},
			]);
		}

		setNoteTitle("");
		setNoteContent("");
		setEditingNoteId(null);
		setIsNoteModalOpen(false);
	};

	const handleEditNote = (note) => {
		setActiveView("notes");
		setNoteTitle(note.title);
		setNoteContent(note.content);
		setEditingNoteId(note.id);
		setIsNoteModalOpen(true);
	};

	const handleDeleteNote = (noteId) => {
		setNotes((currentNotes) => currentNotes.filter((note) => note.id !== noteId));
	};

	const handleAddTask = (event) => {
		event.preventDefault();

		const trimmedTask = taskTitle.trim();

		if (!trimmedTask) {
			return;
		}

		setTasks((currentTasks) => [
			...currentTasks,
			{
				id: Date.now(),
				title: trimmedTask,
				completed: false,
			},
		]);

		setTaskTitle("");
		setIsTaskModalOpen(false);
	};

	const handleToggleTask = (taskId) => {
		setTasks((currentTasks) =>
			currentTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task,
			),
		);
	};

	const handleDeleteTask = (taskId) => {
		setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
	};

	const filteredNotes = notes.filter((note) => {
		const searchValue = searchQuery.toLowerCase();
		return (
			note.title.toLowerCase().includes(searchValue) ||
			note.content.toLowerCase().includes(searchValue)
		);
	});

	const filteredTasks = tasks.filter((task) =>
		task.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="app-layout">
			<Sidebar activeView={activeView} onGoToNotes={goToNotes} onGoToChecklist={goToChecklist} />

			<main className="content-area">
				<Header
					searchQuery={searchQuery}
					onSearchChange={setSearchQuery}
					onAddClick={handleAddClick}
					activeView={activeView}
				/>

				{activeView === "notes" ? (
					<section className="section-block">
						<div className="section-heading section-heading-row">
							<div>
								<h2 className="content-title">Notes</h2>
								<p className="content-text">Add, edit, and delete your notes.</p>
							</div>

							<button type="button" className="secondary-button" onClick={openNewNoteForm}>
								+ New Note
							</button>
						</div>

						<div className="notes-grid">
							{filteredNotes.length > 0 ? (
								filteredNotes.map((note) => (
									<NoteCard
										key={note.id}
										note={note}
										onEdit={handleEditNote}
										onDelete={handleDeleteNote}
									/>
								))
							) : (
								<p className="empty-state">No notes yet. Add your first note above.</p>
							)}
						</div>
					</section>
				) : (
					<section className="section-block checklist-section">
						<div className="section-heading section-heading-row">
							<div>
								<h2 className="content-title">Checklist</h2>
								<p className="content-text">Add tasks, mark them done, or remove them.</p>
							</div>

							<button type="button" className="secondary-button" onClick={openNewTaskForm}>
								+ New Task
							</button>
						</div>

						<div className="task-list">
							{filteredTasks.length > 0 ? (
								filteredTasks.map((task) => (
									<TaskItem
										key={task.id}
										task={task}
										onToggle={handleToggleTask}
										onDelete={handleDeleteTask}
									/>
								))
							) : (
								<p className="empty-state">No tasks yet. Add your first task above.</p>
							)}
						</div>
					</section>
				)}

				{isNoteModalOpen ? (
					<div className="modal-backdrop" role="presentation" onClick={() => setIsNoteModalOpen(false)}>
						<div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="note-modal-title" onClick={(event) => event.stopPropagation()}>
							<div className="modal-header">
								<h3 id="note-modal-title" className="modal-title">
									{editingNoteId ? "Edit Note" : "New Note"}
								</h3>
								<button type="button" className="close-button" onClick={() => setIsNoteModalOpen(false)}>
									×
								</button>
							</div>
							<NoteForm
								title={noteTitle}
								content={noteContent}
								onTitleChange={setNoteTitle}
								onContentChange={setNoteContent}
								onSubmit={handleSaveNote}
								submitLabel={editingNoteId ? "Update note" : "Add note"}
							/>
						</div>
					</div>
				) : null}

				{isTaskModalOpen ? (
					<div className="modal-backdrop" role="presentation" onClick={() => setIsTaskModalOpen(false)}>
						<div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="task-modal-title" onClick={(event) => event.stopPropagation()}>
							<div className="modal-header">
								<h3 id="task-modal-title" className="modal-title">
									New Task
								</h3>
								<button type="button" className="close-button" onClick={() => setIsTaskModalOpen(false)}>
									×
								</button>
							</div>
							<TaskForm
								title={taskTitle}
								onTitleChange={setTaskTitle}
								onSubmit={handleAddTask}
							/>
						</div>
					</div>
				) : null}
			</main>
		</div>
	);
}

export default Home;
