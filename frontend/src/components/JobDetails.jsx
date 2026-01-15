const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {job.title}
          </h2>

          <p className="text-gray-700 font-medium mt-1">
            {job.company}
          </p>

          <p className="text-gray-500">
            {job.location}
          </p>
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700">
          Quick Apply
        </button>
      </div>

      {/* Job Meta */}
      <div className="flex gap-6 text-sm text-gray-600 mb-6">
        <span>Full-time</span>
        <span>{job.salary}</span>
        <span>{job.posted_date}</span>
      </div>

      {/* Qualifications */}
      {job.skills && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Qualifications</h3>
          <div className="flex gap-2 flex-wrap">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Job Description */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Full Job Description
        </h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {job.description}
        </p>
      </div>

      {/* Extra Info */}
      <
