const JobItem = ({ job, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer border-b hover:bg-gray-100 ${
        isActive ? "bg-gray-200" : ""
      }`}
    >
      <h3 className="font-semibold">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.location}</p>
    </div>
  );
};

export default JobItem;
