'use strict';
var expect = require('chai').expect;
var Counter = require('../lib/counter.js');

describe('testing of Counter class and its methods', function() {
  var counter

  before(function() {
    counter = new Counter();
  });

  it('should be zero when object is instantiated', function() {
    expect(counter.count).to.be.eql(0);
  });

  it('should be one greater when incremented', function() {
    var beforeCount = counter.getValue()
    counter.increment()
    expect(counter.getValue()).to.be.eql(beforeCount + 1);
  });
});
