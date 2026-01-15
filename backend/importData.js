const mongoose = require("mongoose");
require("dotenv").config();

const Job = require("./models/job");
const jobsData = require("./data/jobs.json");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected for import ✅");

    await Job.deleteMany(); // optional: clears old data
    await Job.insertMany(jobsData);

    console.log("Job data imported successfully 🚀");
    process.exit();
  })
  .catch((err) => {
    console.error("Import error ❌", err);
    process.exit(1);
  });
