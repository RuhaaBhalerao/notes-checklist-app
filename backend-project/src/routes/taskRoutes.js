import express from 'express';
const router = express.Router();
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleTaskComplete,
} from '../controllers/taskController.js';

router.route('/').get(getTasks).post(createTask);
router.route('/:id').put(updateTask).delete(deleteTask);
router.route('/:id/toggle').patch(toggleTaskComplete);

export default router;
