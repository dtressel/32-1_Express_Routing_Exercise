function calculateMean (arr) {
  const sum = arr.reduce((sum, num) => sum += num);
  const mean = sum / arr.length;
  return mean;
}

function calculateMedian (arr) {
  const sortedNumsArray = arr.sort((a, b) => a - b);
  const midpointIndex = Math.floor(sortedNumsArray.length / 2);
  // For an even number of values, you must get the avereage of the two middle numbers.
  const median = (sortedNumsArray[midpointIndex] + sortedNumsArray[sortedNumsArray.length - midpointIndex - 1]) / 2;
  return median;
}

function calculateMode (arr) {
  const frequencyObj = arr.reduce((accum, num) => {
    if (num in accum) {
      accum[num]++;
      return accum;
    } else {
      accum[num] = 1;
      return accum;
    }
  }, {});
  let maxFrequency = 0;
  let modeArray;
  for (const key in frequencyObj) {
    if (frequencyObj[key] > maxFrequency) {
      modeArray = [];
      modeArray.push(+key);
      maxFrequency = frequencyObj[key];
    } else if (frequencyObj[key] == maxFrequency) {
      modeArray.push(+key);
    }
  }
  if (modeArray.length === 1) {
    return modeArray[0];
  } else if (modeArray.length > 1 && modeArray.length < arr.length) {
    return modeArray;
  } else {
    return 'none';
  }
}

module.exports = {calculateMean, calculateMedian, calculateMode};