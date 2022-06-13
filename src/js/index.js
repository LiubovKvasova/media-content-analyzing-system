'use strict';

const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Error handler
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).send('Something broke!');
});

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USERNAME || "admin",
  password: process.env.DB_PASSWORD || "password",
  database: "mcas"
}).promise();

const FIELD_NAMES = ['id', 'name', 'description', 'DataStream_id'];

// Add report to table
app.post('/api/report/add', async (req, res) => {
  const values = [];
  for (const field of FIELD_NAMES) {
    values.push(req.body[field]);
  }

  const query = `INSERT INTO Report (${FIELD_NAMES.join(', ')}) ` +
    `VALUES (${FIELD_NAMES.map(() => '?').join(', ')}) `;

  try {
    const [ result ] = await db.query(query, values);
    res.send(result);
  } catch(error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// Recieve all the reports
app.get('/api/report/all', async (req, res) => {
  const query = 'SELECT * FROM Report';

  const [ result ] = await db.query(query);

  if (result.length) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

// Recieve report by id
app.get('/api/report/:id', async (req, res) => {
  const query = 'SELECT * FROM Report WHERE id = ?';
  const [ result ] = await db.query(query, req.params.id);

  if (result.length) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

// Update a report
app.put('/api/report/update', async (req, res) => {
  let query = 'UPDATE Report SET';
  let changedPropertiesQuery = '';
  const newValues = [];

  for (const field of FIELD_NAMES) {
    if (field === 'id') {
      continue;
    }

    const newValue = req.body[field]; 
    if (newValue) {
      if (changedPropertiesQuery.length) {
        changedPropertiesQuery += ',';
      }

      changedPropertiesQuery += ` ${field} = ?`;
      newValues.push(newValue);
    }
  }

  if (!changedPropertiesQuery.length || !req.body.id) {
    return res.sendStatus(400);
  }

  query += changedPropertiesQuery + ` WHERE id = ${req.body.id}`;

  try {
    const [ result ] = await db.query(query, newValues);
    res.send(result);
  } catch(error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// Remove report
app.delete('/api/report/:id', async (req, res) => {
  const query = 'DELETE FROM Report WHERE id = ?';
  const [ result ] = await db.query(query, req.params.id);

  res.send(result);
});

const PORT = 3000 || process.env.PORT;
const listener = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

module.exports = listener;
