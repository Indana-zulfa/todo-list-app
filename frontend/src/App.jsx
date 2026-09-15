import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')
  const [filter, setFilter] = useState('All')
  const [editingTask, setEditingTask] = useState(null)

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return
    }

    const task = {
      id: Date.now(),
      title: newTask,
      priority,
      dueDate,
      status: 'Pending',
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: 'Completed' }
          : task
      )
    )
  }

  const handleDeleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setNewTask(task.title)
    setPriority(task.priority)
    setDueDate(task.dueDate)
  }

  const handleUpdateTask = () => {
    if (newTask.trim() === '') {
      return
    }

    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              title: newTask,
              priority,
              dueDate,
            }
          : task
      )
    )

    setEditingTask(null)
    setNewTask('')
    setPriority('Medium')
    setDueDate('')
  }

  const handleCancelEdit = () => {
    setEditingTask(null)
    setNewTask('')
    setPriority('Medium')
    setDueDate('')
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true
    }

    return task.status === filter
  })

  const totalTasks = tasks.length

  const pendingTasks = tasks.filter(
    (task) => task.status === 'Pending'
  ).length

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  ).length

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>My Todo List</h1>
          <p>Organize your tasks and stay productive.</p>
        </div>
      </header>

      <main className="container">
        <section className="summary">
          <div className="summary-card">
            <span>Total Tasks</span>
            <strong>{totalTasks}</strong>
          </div>

          <div className="summary-card">
            <span>Pending</span>
            <strong>{pendingTasks}</strong>
          </div>

          <div className="summary-card">
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </div>
        </section>

        <section className="add-task">
          <h2>
            {editingTask ? 'Edit Task' : 'Add New Task'}
          </h2>

          <div className="task-form">
            <input
              type="text"
              placeholder="What do you need to do?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <button
              onClick={
                editingTask
                  ? handleUpdateTask
                  : handleAddTask
              }
            >
              {editingTask ? 'Save Changes' : 'Add Task'}
            </button>

            {editingTask && (
              <button onClick={handleCancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </section>

        <section className="task-section">
          <div className="section-header">
            <h2>My Tasks</h2>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Tasks</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="task-list">
            {filteredTasks.map((task) => (
              <div className="task-card" key={task.id}>
                <div className="task-info">
                  <h3>{task.title}</h3>
                  <p>Due Date: {task.dueDate}</p>
                </div>

                <div className="task-meta">
                  <span
                    className={`priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                  <span className="status pending">
                    {task.status}
                  </span>

                  <button
                    onClick={() => handleEditTask(task)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleCompleteTask(task.id)}
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App