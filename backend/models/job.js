const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true
  },
  postedDateTime: Date,
  title: String,
  company: String,
  location: String,
  job_link: String,
  company_url: String,
  employment_type: String,
  seniority_level: String,
  companytype: String,
  experience: String,
  min_exp: Number,
  max_exp: Number,
  source: String,
  country: String,
  companyImageUrl: String,
  description: String,
});

module.exports = mongoose.model("Job", jobSchema);
