# Notes & Checklist App

A full-stack productivity application that allows users to manage notes and tasks in one place. The application provides complete CRUD functionality for notes and tasks and is built using React, Express, MongoDB, and Node.js.

## Live Demo

Frontend: https://notes-checklist-app.vercel.app/

## Features

### Notes

* Create notes
* View all notes
* View a single note
* Update notes
* Delete notes
* Pin important notes

### Tasks

* Create tasks
* View all tasks
* Update tasks
* Delete tasks
* Toggle task completion
* Priority support
* Due date support

### Backend Features

* RESTful API
* MongoDB Atlas integration
* Mongoose schemas and validation
* Centralized error handling
* Modular project architecture
* Database seeding support

---

## Tech Stack

### Frontend

* React
* JavaScript
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

### Frontend

```txt
src/
├── components/
├── pages/
├── services/
├── styles/
├── App.jsx
└── main.jsx
```

### Backend

```txt
backend-project/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── noteController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   ├── Note.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── noteRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── seed.js
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## API Endpoints

### Notes

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/notes     | Get all notes   |
| GET    | /api/notes/:id | Get single note |
| POST   | /api/notes     | Create note     |
| PUT    | /api/notes/:id | Update note     |
| DELETE | /api/notes/:id | Delete note     |

### Tasks

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | /api/tasks            | Get all tasks          |
| POST   | /api/tasks            | Create task            |
| PUT    | /api/tasks/:id        | Update task            |
| DELETE | /api/tasks/:id        | Delete task            |
| PATCH  | /api/tasks/:id/toggle | Toggle task completion |

---

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd notes-checklist-app
```

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend-project

npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend project.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Database Seeding

To populate the database with sample notes and tasks:

```bash
npm run seed
```

---

## Learning Outcomes

This project helped me gain hands-on experience with:

* REST API development
* CRUD operations
* React state management
* MongoDB and Mongoose
* Express middleware
* Error handling
* Environment variables
* Cloud deployment
* Frontend and backend integration
* Full-stack application architecture

---

## Future Improvements

* User authentication
* Search and filtering
* Note categories
* Dark mode
* Task reminders
* Real-time updates
* Responsive mobile optimization
* User-specific notes and tasks

---

## Author

Ruhaa Bhalerao

Built as a full-stack learning project to understand modern web application development using React, Express, MongoDB, and Node.js.
