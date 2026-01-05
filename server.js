
const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/health", (req, res) => {
  res.json({ status: "UP", service: "cloudlens-backend" });
});

app.get("/metrics", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(`
# HELP cloudlens_requests_total Total requests
# TYPE cloudlens_requests_total counter
cloudlens_requests_total 1
`);
});

app.listen(PORT, () => {
  console.log(`CloudLens backend running on port ${PORT}`);
});
