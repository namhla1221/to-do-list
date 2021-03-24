exports.handler = async (event, context) => {
  const { clientContext } = context;
  return {
    statusCode: 200,
    body: JSON.stringify({ context }),
  };
};
