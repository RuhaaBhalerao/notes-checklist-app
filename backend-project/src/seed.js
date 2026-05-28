import dotenv from 'dotenv';
import connectDB from './config/db.js';

import Note from './models/Note.js';
import Task from './models/Task.js';

dotenv.config();

const notes = [
  {
    title: 'Study React',
    content: 'Learn props and useState.',
  },
  {
    title: 'Build Backend',
    content: 'Finish Express CRUD APIs.',
  },
];

const tasks = [
  {
    text: 'Complete frontend UI',
    completed: false,
  },
  {
    text: 'Connect MongoDB',
    completed: true,
  },
];

const seedData = async () => {
  try {
    await connectDB();

    await Note.deleteMany();
    await Task.deleteMany();

    await Note.insertMany(notes);
    await Task.insertMany(tasks);

    console.log('Data Seeded Successfully');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
