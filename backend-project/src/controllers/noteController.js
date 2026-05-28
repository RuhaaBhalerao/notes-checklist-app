import Note from '../models/Note.js';

// Create a new note
export const createNote = async (req, res, next) => {
  try {
    const { title, content, isPinned } = req.body;
    const note = await Note.create({ title, content, isPinned });
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

// Get all notes
export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

// Get a single note
export const getSingleNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) {
    next(error);
  }
};

// Update a note
export const updateNote = async (req, res, next) => {
  try {
    const { title, content, isPinned } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, isPinned },
      { new: true }
    );
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) {
    next(error);
  }
};

// Delete a note
export const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (error) {
    next(error);
  }
};
