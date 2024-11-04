import express from "express";

const app = express();

const port = 3310;

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

import cors from "cors";

app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/api/employees", (req, res) => {
  res.json({results: [sampleEmployee]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});