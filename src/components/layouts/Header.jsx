function Header({ searchQuery, onSearchChange, onAddClick, activeView }) {
	const isNotesView = activeView === "notes";
	const searchLabel = isNotesView ? "Search notes" : "Search tasks";
	const searchPlaceholder = isNotesView ? "Search notes..." : "Search tasks...";
	const addButtonLabel = isNotesView ? "+ Add" : "+ Add";

	return (
		<header className="page-header">
			<h2 className="header-greeting">Hello!</h2>

			<div className="header-actions">
				<input
					type="text"
					className="header-search"
					placeholder={searchPlaceholder}
					aria-label={searchLabel}
					value={searchQuery}
					onChange={(event) => onSearchChange(event.target.value)}
				/>

				<button type="button" className="add-button" onClick={onAddClick}>
					{addButtonLabel}
				</button>
			</div>
		</header>
	);
}

export default Header;
