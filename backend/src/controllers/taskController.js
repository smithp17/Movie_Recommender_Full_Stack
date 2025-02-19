import pool from '../db.js';

// GET /api/tasks - Fetch tasks for logged-in user
// ✅ Get all tasks for the logged-in user
export const getTasks = async (req, res) => {
    try {
      const { rows } = await pool.query(
        'SELECT * FROM tasks WHERE "userId" = $1 ORDER BY created_at DESC',
        [req.userId]
      );
      res.status(200).json(rows); // Send back the list of tasks
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch tasks.' });
    }
  };
  

// POST /api/tasks - Create a new task
export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user?.userId; // Extracted from token
  
    console.log('🔍 Extracted userId:', userId);  // ✅ Add this line
  
    if (!userId) return res.status(400).json({ error: 'User not authenticated.' });
  
    try {
      const result = await pool.query(
        `INSERT INTO tasks (title, description, userId) VALUES ($1, $2, $3) RETURNING *`,
        [title, description, userId]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error('❌ Error creating task:', err); // ✅ Logs full SQL error
      res.status(500).json({ error: 'Failed to create task.' });
    }
  };
  
  

// PUT /api/tasks/:id - Update a task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    const { userId } = req.user;

    const { rows } = await pool.query(
      'UPDATE tasks SET title = $1, description = $2, isComplete = $3 WHERE id = $4 AND userId = $5 RETURNING *',
      [title, description, isComplete, id, userId]
    );

    if (rows.length === 0) return res.status(404).json({ error: 'Task not found.' });

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task.' });
  }
};

// DELETE /api/tasks/:id - Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const { rowCount } = await pool.query('DELETE FROM tasks WHERE id = $1 AND userId = $2', [id, userId]);

    if (rowCount === 0) return res.status(404).json({ error: 'Task not found.' });

    res.json({ message: 'Task deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task.' });
  }
};
