import { formatDate, getExperienceLabel } from "../utils/jobHelpers";

const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
          <p className="text-gray-700 font-medium mt-1">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
          <p>
            <strong>Job ID:</strong> {job.jobId}
          </p>
        </div>

        <a
          href={job.job_link}
          target="_blank"
          rel="noreferrer"
          className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700"
        >
          ⚡ Quick Apply
        </a>
      </div>

      <hr className="my-6" />

      {/* Job Meta */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Job Details</h3>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
          <span>💼 {job.employment_type || "N/A"}</span>
          <span>🕒 {getExperienceLabel(job)}</span>
          <span>📅 {job.postedDateTime}</span>
          <span className="capitalize">🌐 {job.source}</span>
          <span>🌍 {job.country}</span>
        </div>
      </div>

      <hr className="my-6" />

      {/* Qualifications */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Qualifications</h3>

        <div className="flex flex-col gap-2">
          {job.seniority_level && (
            <span className="tag">Seniority Level: {job.seniority_level}</span>
          )}
          {job.experience && (
            <span className="tag">Experience: {job.experience}</span>
          )}
          {job.companytype && (
            <span className="tag">Company-Time: {job.companytype}</span>
          )}
          {job.employment_type && (
            <span className="tag">Employment-Type: {job.employment_type}</span>
          )}
        </div>
      </div>

      <hr className="my-6" />

      {/* Company Info */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Company Information</h3>

        <div className="flex items-center gap-4">
          {job.companyImageUrl && (
            <img
              src={job.companyImageUrl}
              alt={job.company}
              className="w-16 h-16 object-contain border rounded"
            />
          )}

          {job.company_url && (
            <a
              href={job.company_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-medium"
            >
              Visit Company Page
            </a>
          )}
        </div>
      </div>

      {/* Extra Details */}
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <strong>Job ID:</strong> {job.jobId}
        </p>
        <p>
          <strong>Minimum Experience:</strong> {job.min_exp} Years
        </p>
        <p>
          <strong>Maximum Experience:</strong> {job.max_exp} Years
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
