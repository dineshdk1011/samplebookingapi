var express = require('express');
var router = express.Router();

const stripe = require('stripe')('sk_test_51LFG57SJ4QAb85eZWWrSk29OzXVXQdgUnlsbHhs1aRhEoxE9EnEwpotQEDoVGAx9a45iv3mr5v1YyldrRrFvcu5h00RH15mO7Y');


router.post('/pay', async (request, response) => {
  try {
    // Create the PaymentIntent
    let intent = await stripe.paymentIntents.create({
      payment_method: request.body.payment_method_id,
      description: "Test payment",
      amount: request.body.amount * 100,
      currency: 'inr',
      confirmation_method: 'manual',
      confirm: true
    });
    // Send the response to the client
    response.send(generateResponse(intent));
  } catch (e) {
    // Display error on client
    return response.send({ error: e.message });
  }
});

const generateResponse = (intent) => {
  if (intent.status === 'succeeded') {
    // The payment didn’t need any additional actions and completed!
    // Handle post-payment fulfillment
    return {
      success: true
    };
  } else {
    // Invalid status
    // return {
    //   error: 'Invalid PaymentIntent status'
    // };
    return {
      success: true
    };
  }
};

// request handlers
router.get('/', (req, res) => {
  res.send('Stripe Integration! - Clue Mediator');
});

module.exports = router;