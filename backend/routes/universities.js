const express = require("express");
const router = express.Router();
const {
  getUniversities,
  addUniversity,
  deleteUniversity
} = require("../controllers/universityController");

const verifyToken = require("../middleware/authMiddleware");
const { updateUniversity } = require("../controllers/universityController");


router.get("/", getUniversities);

router.post("/", verifyToken, addUniversity);
router.delete("/:id", verifyToken, deleteUniversity);
router.put("/:id", verifyToken, updateUniversity);



module.exports = router;
