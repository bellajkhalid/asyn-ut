// parentFunction.js
const {asyncFunction1} = require('./asyncFunction');

async function parentFunction() {
  const result = await asyncFunction1();
  return result.toUpperCase();
}

module.exports = parentFunction;
