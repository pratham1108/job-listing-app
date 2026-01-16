import { useEffect, useState } from "react";
import axios from "axios";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async (location = "") => {
    const res = await axios.get(`${API_URL}?location=${location}`);
    setJobs(res.data);
    setSelectedJob(res.data[0] || null);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-350 mx-auto h-screen grid grid-cols-[420px_1fr] gap-4 p-4">
        {/* LEFT: Job List */}
        <div className="bg-white rounded-lg shadow-sm overflow-y-auto">
          <JobList
            jobs={jobs}
            onSelect={setSelectedJob}
            selectedJob={selectedJob}
            onSearch={fetchJobs}
          />
        </div>

        {/* RIGHT: Job Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-y-auto">
          <JobDetails job={selectedJob} />
        </div>
      </div>
    </div>
  );
}

export default App;
