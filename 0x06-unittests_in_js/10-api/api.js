/* jshint esversion: 8 */

const express = require('express');
const url = require('url');

const port = 7865;
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.set("Content-Type", "application/json");
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.post('/login', (req, res) => {
  const userName = req.body.userName || ''
  if (userName && userName !== '') res.send(`Welcome ${userName}`)
  else res.status(404).send();
})

app.listen(port, () => console.log(`API available on localhost port ${port}`));

module.exports = app;
