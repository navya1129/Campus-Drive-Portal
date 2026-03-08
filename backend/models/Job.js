const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

  companyName: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  ctc: {
    type: String,
    required: true
  },

  branches: {
    type: String,
    required: true
  },

  deadline: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  skills: {
    type: String,
    required: true
  },

  logo: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Job", jobSchema);