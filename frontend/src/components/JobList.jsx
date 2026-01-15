import JobItem from "./JobItem";
import SearchBar from "./SearchBar";

const JobList = ({ jobs, onSelect, selectedJob, onSearch }) => {
  return (
    <div className="w-1/3 border-r flex flex-col">
      <SearchBar onSearch={onSearch} />

      <div className="flex-1 overflow-y-auto">
        {jobs.map((job) => (
          <JobItem
            key={job._id}
            job={job}
            onClick={() => onSelect(job)}
            isActive={selectedJob?._id === job._id}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
