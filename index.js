const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

// VERIFY (GET)
app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = "test123";

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
});

// RECEIVE MESSAGE (POST)
app.post("/webhook", async (req, res) => {
  console.log("Incoming:", JSON.stringify(req.body));

  // Forward to Make (add later)
  
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running"));
