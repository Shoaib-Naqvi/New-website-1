const expess = require('express');
const app = expess();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);

app.post('/data', (req, res) => {
  res.json({ message: 'Data received' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;





// server.js
const express = require('express');
const app1 = express();
 
app.post('/data', (req, res) => {
  res.json({ message: 'Data received' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
