// import { generateGithubClient } from '#services/github/index';

const handler = (event) => {
  console.log('event', JSON.stringify(event));
  // const githubClient = generateGithubClient();
  // console.log(githubClient);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world!',
    }),
  };
};

export { handler };
