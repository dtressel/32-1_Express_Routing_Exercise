const express = require('express');
const ExpressError = require('./express-error');
const {calculateMean, calculateMedian, calculateMode} = require('./calculations');

const app = express();

app.use((req, res, next) => {
  try {
    const {nums} = req.query
    if (!nums) {
      throw new ExpressError('nums are required', 400);
    }
    const numsAsStringsArray = nums.split(',');
    const numsArray = numsAsStringsArray.map((num) => +num);
    // + operator 
    if (numsArray.includes(NaN)) {
      throw new ExpressError('You submitted a value that is not a number. You must only submit numbers.', 400);
    }
    req.query.numsArray = numsArray;
    next();
  } catch (err) {
    next(err);
  }

})

app.get('/mean', (req, res) => {
  const numsArray = req.query.numsArray;
  const mean = calculateMean(numsArray);
  res.send({operation: "mean", value: mean});
})

app.get('/median', (req, res) => {
  const numsArray = req.query.numsArray;
  const median = calculateMedian(numsArray);
  res.send({operation: "median", value: median});
})

app.get('/mode', (req, res) => {
  const numsArray = req.query.numsArray;
  const mode = calculateMode(numsArray);
  return res.send({operation: "mode", value: mode});
})

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let message = error.message;

  res.status(status).json(
    {error: {message, status}}
  );
})

app.listen(3000, () => {
  console.log('Server running at localhost:3000');
})