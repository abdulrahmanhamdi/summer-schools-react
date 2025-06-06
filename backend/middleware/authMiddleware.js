function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token gerekli." });
  }

  if (token !== "mock-token-abc123") {
    return res.status(403).json({ error: "Geçersiz token." });
  }

  next(); // Token doğruysa devam et
}

module.exports = verifyToken;
