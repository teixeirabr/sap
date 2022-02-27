const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const request_headers = req.headers;
  
  res.status(200).send({
      request_headers,
  });
});

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));