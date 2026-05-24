const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

const recommendations = JSON.parse(
  fs.readFileSync("data.json", "utf8")
);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h1>Simple Recommendation System Updated</h1>
    <form method="GET" action="/recommend">
      <input type="text" name="input" placeholder="Enter input like hot, cold, gym" />
      <button type="submit">Recommend</button>
    </form>
  `);
});

app.get("/recommend", (req, res) => {
  const input = req.query.input?.toLowerCase();

  const recommendation =
    recommendations[input] || "No recommendation found";

  res.send(`
    <h1>Simple Recommendation System</h1>
    <form method="GET" action="/recommend">
      <input type="text" name="input" value="${input || ""}" />
      <button type="submit">Recommend</button>
    </form>

    <h2>Recommendation: ${recommendation}</h2>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
