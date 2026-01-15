const JobItem = ({ job, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer border-b transition ${
        isActive
          ? "border-l-4 border-purple-600 bg-purple-50"
          : "hover:bg-gray-50"
      }`}
    >
      {/* Job Title */}
      <h3 className="text-blue-700 font-semibold text-base leading-snug">
        {job.title}
      </h3>

      {/* Company + Location */}
      <p className="text-sm text-gray-700 mt-1">
        {job.company} — {job.location}
      </p>

      {/* Short Description */}
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        {job.description}
      </p>

      {/* Salary + Action */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm font-medium text-gray-800">
          {job.salary}
        </span>

        <span className="text-sm text-purple-600 font-semibold">
          Quick Apply
        </span>
      </div>
    </div>
  );
};

export default JobItem;
