const express = require('express')
const cors = require('cors')

const pool = require('./db')

const app = express()

app.use(cors())
const PORT = 3000

app.use(express.json())

const tasks = [
  {
    id: 1,
    title: 'Finish thesis presentation',
    priority: 'High',
    dueDate: '2026-09-20',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Upload project to GitHub',
    priority: 'Medium',
    dueDate: '2026-09-18',
    status: 'Completed',
  },
]

app.get('/', (req, res) => {
  res.send('Todo List Backend is running!')
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')

    res.json({
      message: 'Database connected successfully!',
      time: result.rows[0].now,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Database connection failed',
    })
  }
})

app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM tasks ORDER BY id ASC'
    )

    res.json(result.rows)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to fetch tasks',
    })
  }
})

app.post('/api/tasks', async (req, res) => {
  try {
    const { title, priority, dueDate } = req.body

    console.log(title, priority, dueDate)

    const result = await pool.query(
      `INSERT INTO tasks (title, priority, due_date, status)
       VALUES ($1, $2, $3, 'Pending')
       RETURNING *`,
      [title, priority, dueDate]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Failed to create task',
    })
  }
})

app.put('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)

  const task = tasks.find((task) => task.id === id)

  if (!task) {
    return res.status(404).json({
      message: 'Task not found',
    })
  }

  task.title = req.body.title
  task.priority = req.body.priority
  task.dueDate = req.body.dueDate

  res.json(task)
})

app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id)

  const taskIndex = tasks.findIndex((task) => task.id === id)

  if (taskIndex === -1) {
    return res.status(404).json({
      message: 'Task not found',
    })
  }

  const deletedTask = tasks.splice(taskIndex, 1)

  res.json(deletedTask[0])
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})