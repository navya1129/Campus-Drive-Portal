const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const {verifyToken} = require("../middleware/authMiddleware");

const Application = require("../models/Application");

/* ========================== */
/* Apply for Job */
/* ========================== */

router.post("/", verifyToken, async (req, res) => {

  try {

    const { jobId } = req.body;

    if (!jobId) {
      return res.status(400).json({
        message: "Job ID missing"
      });
    }

    const existing = await Application.findOne({
      studentId: req.user._id,
      jobId: new mongoose.Types.ObjectId(jobId)
    });

    if (existing) {
      return res.status(400).json({
        message: "Already applied to this job"
      });
    }

    const application = new Application({
      studentId: req.user._id,
      jobId: new mongoose.Types.ObjectId(jobId)
    });

    await application.save();

    res.json({
      message: "Application submitted successfully"
    });

  } catch (error) {

    console.error("APPLICATION ERROR:", error);

    res.status(500).json({
      message: "Application failed"
    });

  }

});


/* ========================== */
/* Get My Applications */
/* ========================== */

router.get("/my",verifyToken, async(req,res)=>{

  try{

    const applications = await Application.find({
  studentId:req.user._id
})
.populate("jobId")
.filter(app => app.jobId !== null);

    res.json(applications);

  }catch(error){

    res.status(500).json(error);

  }

});

module.exports = router;