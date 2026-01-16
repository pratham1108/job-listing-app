const mongoose = require("mongoose");
require("dotenv").config();

const Job = require("./models/job");
const jobsData = require("./data/jobs.json");

/* ---------- SAFE HELPERS ---------- */

const getString = (value) => {
  if (!value) return null;

  if (typeof value === "string") return value;

  if (value.$numberLong) return value.$numberLong.toString();

  if (value.$numberDouble) {
    return isNaN(Number(value.$numberDouble)) ? null : value.$numberDouble;
  }

  return null;
};

const getDate = (value) => {
  if (!value) return null;
  if (value.$date) return new Date(value.$date);
  return null;
};

/* ---------- IMPORT ---------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected for import ✅");

    const formattedJobs = jobsData.map((job) => ({
      jobId: getString(job["Job ID (Numeric)"]),

      title: getString(job.title),
      company: getString(job.company),
      location: getString(job.location),

      job_link: getString(job.job_link),
      company_url: getString(job.company_url),
      companyImageUrl: getString(job.companyImageUrl),

      employment_type: getString(job.employment_type),
      seniority_level: getString(job.seniority_level),
      companytype: getString(job.companytype),

      experience: getString(job.experience),
      min_exp: job.min_exp ?? null,
      max_exp: job.max_exp ?? null,

      source: getString(job.source),
      country: getString(job.country),

      postedDateTime: getDate(job.postedDateTime),

      description: getString(job.description)
    }));

    await Job.deleteMany();
    await Job.insertMany(formattedJobs);

    console.log("Job data imported successfully 🚀");
    process.exit();
  })
  .catch((err) => {
    console.error("Import error ❌", err);
    process.exit(1);
  });
