const JobItem = ({ job, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border-b cursor-pointer transition ${
        isActive
          ? "border-l-4 border-purple-600 bg-purple-50"
          : "hover:bg-gray-50"
      }`}
    >
      {/* Job Title */}
      <h3 className="text-blue-700 font-semibold leading-snug">
        {job.title}
      </h3>

      {/* Company & Location */}
      <p className="text-sm text-gray-700 mt-1">
        {job.company} — {job.location}
      </p>

      {/* Source */}
      <p className="text-xs text-gray-500 mt-1 capitalize">
        Source: {job.source}
      </p>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-gray-600">
          {job.experience || `${job.min_exp}-${job.max_exp} yrs`}
        </span>

        <span className="text-sm font-semibold text-purple-600">
          Quick Apply
        </span>
      </div>
    </div>
  );
};

export default JobItem;
