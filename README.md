# Todo List App

A simple Todo List web application built to help users organize and manage their daily tasks.

## Features

* Add new tasks
* Set task priority
* Set due dates
* View task list
* Filter tasks by status
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Store tasks in PostgreSQL database

## Tech Stack

* **Frontend:** React, Vite
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **API Testing:** Postman

## Project Structure

```text
todo-list-app/
├── frontend/
├── backend/
└── .gitignore
```

## How to Run

### 1. Run Backend

```bash
cd backend
node server.js
```

Backend runs on:

```text
http://localhost:3000
```

### 2. Run Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Database

The application uses PostgreSQL with a database named:

```text
todo_list_db
```

Tasks are stored in the `tasks` table.

## Author

**Indana Zulfa**
