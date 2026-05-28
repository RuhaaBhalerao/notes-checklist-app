import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);
