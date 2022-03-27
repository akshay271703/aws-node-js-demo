require('dotenv').config();
const app = require('express')();
const { triggerEvent } = require('./aws');

app.listen(3000, async () => {
  // event bridge service
  const result = await triggerEvent();
  console.log('Response from event bridge - ', result);
});
