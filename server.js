const express = require('express');

const app = express();

const recommendations = {
  hot: 'Summer',
  cold: 'Winter',
  gym: 'Protein',
  study: 'Laptop'
};

app.get('/recommend/:input', (req, res) => {
  const input = req.params.input.toLowerCase();

  const result = recommendations[input] || 'No recommendation found';

  res.send({
    input,
    recommendation: result
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
