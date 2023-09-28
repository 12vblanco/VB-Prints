exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
