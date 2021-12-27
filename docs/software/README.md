# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
USE mcas;

INSERT INTO Service (id, name, description, uri, Service_id)
VALUES (1, 'Google', 'Google service', 'google.com', 1);

INSERT INTO DataStream (id, entryPoint, name, description, Service_id)
VALUES
        (1, 1, 'Hyouka series', 'Series', 1),
        (2, 2, 'Dog barks at empty bottle', 'Movie', 1),
        (3, 3, 'Tiny cats', 'Movie', 1),
        (4, 4, 'Sweet present', 'Film', 1),
        (5, 5, 'Merry Christmass', 'Movie', 1),
        (6, 6, 'Cute penguin', 'Movie', 1),
        (7, 7, 'Magestic mask', 'Advertisement', 1),
        (8, 8, 'Magic out of Hogwarts', 'Movie', 1),
        (9, 9, 'I do not know', 'Movie', 1);


INSERT INTO Report (id, name, description, DataStream_id)
VALUES
        (1, 'Hyouka series', 'The anime series about little girl Hyouka', 1),
        (2, 'Dog barks at empty bottle', 'A movie containing little dog (chihuahua) which barks at empty wine bottle', 2),
        (3, 'Tiny cats', 'A movie containing tiny cats which playing with threads and balls', 3),
        (4, 'Sweet present', 'A film which plot is about sweet present presented to homeless old man', 4),
        (5, 'Merry Christmass', 'A movie containing Volodymyr Zelensky greeting Ukrainians with Christmass', 5),
        (6, 'Cute penguin', 'A movie containing little penguin at one station on Antarctica', 6),
        (7, 'Magestic mask', 'An advertisement of a Gucci mask which costs $500', 7),
        (8, 'Magic out of Hogwarts', 'A movie containing man who wrote course work in 1 hour', 8),
        (9, 'I do not know', 'A movie containing women who stands in shop for 6 hours because she does not know what...', 9);
```

## RESTfull сервіс для управління даними

```javascript
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
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
```

### Опис кінцевих точок RESTfull сервісу доступу до даних

- HTTP GET, `/api/report/all` - Отримати списоок усіх звітів
- HTTP GET, `/api/report/:id` - Отримати звіт за його ID
- HTTP POST, `/api/report/add` - Додати звіт
- HTTP DELETE, `/api/report/:id` - Видалити звіт
- HTTP PUT, `/api/report/update` - Оновити звіт
