const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "universities.json");

// ✅ GET
function getUniversities(req, res) {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Veri okunamadı." });
    res.json(JSON.parse(data));
  });
}

// ✅ POST
function addUniversity(req, res) {
  const { id, name, city, type, detail, logo } = req.body;

  if (!id || !name || !city || !type || !detail) {
    return res.status(400).json({ error: "Tüm alanlar zorunludur." });
  }

  fs.readFile(dataPath, "utf8", (err, fileData) => {
    if (err) return res.status(500).json({ error: "Dosya okunamadı." });

    const data = JSON.parse(fileData);
    if (data[id]) {
      return res.status(400).json({ error: "Bu ID zaten mevcut." });
    }

    data[id] = { id, name, city, type, detail, logo: logo || "" };

    fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Veri kaydedilemedi." });
      res.status(201).json({ message: "Üniversite eklendi.", university: data[id] });
    });
  });
}

// ✅ DELETE
function deleteUniversity(req, res) {
  const uniId = req.params.id;

  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Dosya okunamadı." });

    const universities = JSON.parse(data);
    if (!universities[uniId]) {
      return res.status(404).json({ error: "Üniversite bulunamadı." });
    }

    delete universities[uniId];

    fs.writeFile(dataPath, JSON.stringify(universities, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Veri silinemedi." });
      res.json({ message: "Üniversite silindi." });
    });
  });
}
function updateUniversity(req, res) {
  const uniId = req.params.id;
  const updatedData = req.body;

  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Veri okunamadı." });

    const universities = JSON.parse(data);
    if (!universities[uniId]) {
      return res.status(404).json({ error: "Üniversite bulunamadı." });
    }

    // تحديث البيانات
    universities[uniId] = { ...universities[uniId], ...updatedData };

    fs.writeFile(dataPath, JSON.stringify(universities, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Veri güncellenemedi." });
      res.json({ message: "Üniversite güncellendi.", university: universities[uniId] });
    });
  });
}

module.exports = {
  getUniversities,
  addUniversity,
  deleteUniversity,
  updateUniversity 
};


