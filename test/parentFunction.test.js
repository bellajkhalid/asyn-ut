// parentFunction.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const parentFunction = require('../parentFunction'); // Adjust the path as necessary
const asyncFunction = require('../asyncFunction'); // Adjust the path as necessary

describe('parentFunction', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return uppercased result from asyncFunction', async () => {
    sinon.stub(asyncFunction, 'asyncFunction1').resolves('async operation completed');
    const result = await parentFunction();
    expect(result).to.equal('ASYNC OPERATION COMPLETED');
  });

});
