const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/recommend/:input', (req, res) => {
  const input = req.params.input.toLowerCase();

  const dataPath = path.join(__dirname, 'data.json');
  const items = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  const match = items.find(item => item.input.toLowerCase() === input);

  res.json({
    input,
    recommendation: match ? match.recommendation : 'No recommendation found'
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});