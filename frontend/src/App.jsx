import './App.css'

function App() {
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
            <strong>5</strong>
          </div>

          <div className="summary-card">
            <span>Pending</span>
            <strong>3</strong>
          </div>

          <div className="summary-card">
            <span>Completed</span>
            <strong>2</strong>
          </div>
        </section>

        <section className="add-task">
          <h2>Add New Task</h2>

          <div className="task-form">
            <input
              type="text"
              placeholder="What do you need to do?"
            />

            <select>
              <option>Low Priority</option>
              <option>Medium Priority</option>
              <option>High Priority</option>
            </select>

            <input type="date" />

            <button>Add Task</button>
          </div>
        </section>

        <section className="task-section">
          <div className="section-header">
            <h2>My Tasks</h2>

            <select>
              <option>All Tasks</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="task-list">
            <div className="task-card">
              <div className="task-info">
                <h3>Finish thesis presentation</h3>
                <p>Prepare slides for the thesis defense.</p>
              </div>

              <div className="task-meta">
                <span className="priority high">High</span>
                <span className="status pending">Pending</span>
                <button>Complete</button>
              </div>
            </div>

            <div className="task-card">
              <div className="task-info">
                <h3>Upload project to GitHub</h3>
                <p>Organize project files and documentation.</p>
              </div>

              <div className="task-meta">
                <span className="priority medium">Medium</span>
                <span className="status pending">Pending</span>
                <button>Complete</button>
              </div>
            </div>

            <div className="task-card completed-task">
              <div className="task-info">
                <h3>Learn React basics</h3>
                <p>Understand components and JSX.</p>
              </div>

              <div className="task-meta">
                <span className="priority low">Low</span>
                <span className="status completed">Completed</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App