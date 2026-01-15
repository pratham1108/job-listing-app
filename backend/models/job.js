const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  employment_type: String,
  posted_date: String,
  source: String,
  experience_range: String
});

module.exports = mongoose.model("Job", jobSchema);
