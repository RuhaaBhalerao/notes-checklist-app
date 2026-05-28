import express from 'express';
const router = express.Router();
import {
  createNote,
  getNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from '../controllers/noteController.js';

router.route('/').get(getNotes).post(createNote);
router.route('/:id').get(getSingleNote).put(updateNote).delete(deleteNote);

export default router;
