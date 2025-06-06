const express = require("express");
const router = express.Router();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

router.post("/login", (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true, token: "mock-token-abc123" });
  }

  return res.status(401).json({ success: false, error: "Şifre yanlış." });
});

module.exports = router;
