function Sidebar({ activeView, onGoToNotes, onGoToChecklist }) {
	return (
		<aside className="sidebar">
			<div>
				<h1 className="sidebar-title">Notes Checklist</h1>

				<nav className="sidebar-nav" aria-label="Main navigation">
					<button
						type="button"
						className={activeView === "notes" ? "nav-button active" : "nav-button"}
						onClick={onGoToNotes}
					>
						Notes
					</button>

					<button
						type="button"
						className={activeView === "checklist" ? "nav-button active" : "nav-button"}
						onClick={onGoToChecklist}
					>
						Checklist
					</button>
				</nav>
			</div>

			<p className="sidebar-footer">Build one small step every day.</p>
		</aside>
	);
}

export default Sidebar;
