// utils/jobHelpers.js
export const formatDate = (dateObj) => {
  if (!dateObj?.$date) return "N/A";
  return new Date(dateObj.$date).toLocaleDateString();
};

export const getExperienceLabel = (job) => {
  if (job.experience) return job.experience;
  if (job.min_exp !== undefined && job.max_exp !== undefined)
    return `${job.min_exp}-${job.max_exp} Years`;
  return "Not specified";
};
