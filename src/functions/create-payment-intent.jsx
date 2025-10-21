const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const { amount, price } = data;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      price: price,
      currency: "gbp",
      payment_method_types: ["paypal", "card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
