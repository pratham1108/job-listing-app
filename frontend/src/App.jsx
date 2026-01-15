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
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* LEFT: Job List */}
        <div className="md:col-span-1 bg-white rounded-lg shadow overflow-y-auto">
          <JobList
            jobs={jobs}
            onSelect={setSelectedJob}
            selectedJob={selectedJob}
            onSearch={fetchJobs}
          />
        </div>

        {/* RIGHT: Job Details */}
        <div className="md:col-span-2 bg-white rounded-lg shadow overflow-y-auto">
          <JobDetails job={selectedJob} />
        </div>
      </div>
    </div>
  );
}

export default App;
