const handler = (event) => {
  console.log('event', JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world!',
    }),
  };
};

export { handler };
