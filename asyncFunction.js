// asyncFunction.js
async function asyncFunction1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Async operation completed');
      }, 1000);
    });
  }
  
  function anotherFunction() {
    return 'Another function result';
  }
  
  module.exports = { asyncFunction1, anotherFunction };
  