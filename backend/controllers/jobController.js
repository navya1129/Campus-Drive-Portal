const Job = require("../models/Job");

/* Create Job */
exports.createJob = async (req, res) => {

  try {

    const job = new Job({
      ...req.body,
      logo: req.file ? req.file.filename : ""
    });

    await job.save();

    res.status(201).json(job);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to create job"
    });

  }

};


/* Get All Jobs */
exports.getJobs = async (req, res) => {

  try {

    const jobs = await Job.find().sort({ createdAt: -1 });

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch jobs"
    });

  }

};


/* Get Single Job */
exports.getJobById = async (req, res) => {

  try {

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);

  } catch (error) {

    res.status(500).json(error);

  }

};


/* Delete Job */
exports.deleteJob = async (req, res) => {

  try {

    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job deleted successfully"
    });

  } catch (error) {

    res.status(500).json(error);

  }

};