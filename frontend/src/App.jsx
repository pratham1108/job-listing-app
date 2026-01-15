import { useEffect, useState } from "react";
import axios from "axios";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async (location = "") => {
    const res = await axios.get(
      `${API_URL}?location=${location}`
    );
    setJobs(res.data);
    setSelectedJob(res.data[0] || null);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="h-screen flex">
      <JobList
        jobs={jobs}
        onSelect={setSelectedJob}
        selectedJob={selectedJob}
        onSearch={fetchJobs}
      />
      <JobDetails job={selectedJob} />
    </div>
  );
}

export default App;
