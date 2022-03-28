// import { create } from 'apisauce';

export const generateGithubClient = () => {
  console.log(process.env);
  const githubClient = {};
  return githubClient;
};

// export const getOrganizations = async (organization = 'wednesday-solutions') => {
//   const githubClient = generateGithubClient();
//   const repoData = await githubClient.get(`/orgs/${organization}`);
//   return repoData.data;
// };
