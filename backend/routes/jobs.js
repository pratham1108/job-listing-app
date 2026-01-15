const express = require("express");
const Job = require("../models/job");

const router = express.Router();

// GET all jobs OR filter by location
router.get("/", async (req, res) => {
  try {
    const { location } = req.query;

    let query = {};
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(query);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
