const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="w-2/3 flex items-center justify-center text-gray-500">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="w-2/3 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-4">{job.location}</p>

      <p className="mb-4">{job.description}</p>

      <div className="space-y-2 text-sm">
        <p><strong>Employment Type:</strong> {job.employment_type}</p>
        <p><strong>Experience:</strong> {job.experience_range}</p>
        <p><strong>Posted Date:</strong> {job.posted_date}</p>
        <p><strong>Source:</strong> {job.source}</p>
      </div>
    </div>
  );
};

export default JobDetails;
