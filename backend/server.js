// backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'messages.db'));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the project root
app.use(express.static(path.join(__dirname, '../')));

// Create table if not exists
const createTable = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`;
db.run(createTable);

// API endpoint to receive form data
app.post('/api/messages', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  db.run(
    'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [name, email, subject, message],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Database error.' });
      }
      res.json({ success: true, id: this.lastID });
    }
  );
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
