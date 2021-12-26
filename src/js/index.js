'use strict';

const express = require("express");
const mysql = require('mysql2');

const app = express();
const jsonParser = express.json();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USERNAME || "admin",
  password: process.env.DB_PASSWORD || "password",
  database: "mcas"
}).promise();

const FIELD_NAMES = ['id', 'name', 'description', 'DataStream_id'];

// Add report to table
app.post('/api/report/add', jsonParser, async (req, res) => {
  const values = [];
  for (const field of FIELD_NAMES) {
    values[field] = req.body[field];
  }

  const query = `INSERT INTO Report (${FIELD_NAMES.join(', ')}) ` +
    `VALUES (${FIELD_NAMES.map(() => '?').join(', ')}) `;

  const result = await db.query(query, values);
    
  if (result) {
    res.send(result);
  } else {
    res.sendStatus(409);
  }
});

// Recieve report by id
app.get('/api/report/:id', async (req, res) => {
  const query = 'SELECT * FROM Report WHERE id = ?';
  const result = await db.query(query, req.body.id);

  if (result) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

// Recieve all the reports
app.get('/api/report/all', async (req, res) => {
  const query = 'SELECT * FROM Report';

  const result = await db.query(query);

  if (result) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

// Update a report
app.put('/api/report/update', jsonParser, async (req, res) => {
  let query = 'UPDATE Report SET ';
  let changedPropertiesQuery = '';
  const newValues = [];

  for (const field of FIELD_NAMES) {
    if (field === 'id') {
      continue;
    }

    const newValue = req.body[field]; 
    if (newValue) {
      changedPropertiesQuery += `${field} = ? `;
      newValues.push(newValue);
    }
  }

  if (!changedPropertiesQuery.length || !req.body.id) {
    return res.sendStatus(400);
  }

  query += changedPropertiesQuery + `WHERE id = ${req.body.id}`;
  const result = await db.query(query, newValues);

  if (result) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

// Remove report
app.delete('/api/report/:id', async (req, res) => {
  const query = 'DELETE FROM Report WHERE id = ?';
  const result = await db.query(query, req.body.id);

  if (result) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

const PORT = 3000 || process.env.PORT;

try {
  app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
} catch (error) {
  console.log(error);
}
