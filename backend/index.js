const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mathematical Functions
app.post('/sum', (req, res) => {
  const { data } = req.body;
  const sum = data.reduce((acc, val) => acc + val, 0);
  res.json({ result: sum });
});

app.post('/average', (req, res) => {
  const { data } = req.body;
  const avg = data.reduce((acc, val) => acc + val, 0) / data.length;
  res.json({ result: avg });
});

app.post('/max', (req, res) => {
  const { data } = req.body;
  const max = Math.max(...data);
  res.json({ result: max });
});

app.post('/min', (req, res) => {
  const { data } = req.body;
  const min = Math.min(...data);
  res.json({ result: min });
});

app.post('/count', (req, res) => {
  const { data } = req.body;
  const count = data.filter((val) => typeof val === 'number').length;
  res.json({ result: count });
});

// Data Quality Functions
app.post('/trim', (req, res) => {
  const { data } = req.body;
  const trimmed = data.map((val) => (typeof val === 'string' ? val.trim() : val));
  res.json({ result: trimmed });
});

app.post('/upper', (req, res) => {
  const { data } = req.body;
  const upper = data.map((val) => (typeof val === 'string' ? val.toUpperCase() : val));
  res.json({ result: upper });
});

app.post('/lower', (req, res) => {
  const { data } = req.body;
  const lower = data.map((val) => (typeof val === 'string' ? val.toLowerCase() : val));
  res.json({ result: lower });
});

app.post('/remove-duplicates', (req, res) => {
  const { data } = req.body;
  const unique = [...new Set(data)];
  res.json({ result: unique });
});

app.post('/find-and-replace', (req, res) => {
  const { data, find, replace } = req.body;
  const replaced = data.map((val) => (typeof val === 'string' ? val.replace(find, replace) : val));
  res.json({ result: replaced });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});