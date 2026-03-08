const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();

const {
  createJob,
  getJobs,
  getJobById,
  deleteJob
} = require("../controllers/jobController");

const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

/* Admin: Create Job */

router.post("/", verifyToken, isAdmin, upload.single("logo"), createJob);

/* Students: View Jobs */

router.get("/", verifyToken, getJobs);

/* Job Details */

router.get("/:id", verifyToken, getJobById);

/* Admin Delete Job */

router.delete("/:id", verifyToken, isAdmin, deleteJob);

module.exports = router;