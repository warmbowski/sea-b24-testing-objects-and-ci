'use strict';

function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function() {
  return this.count++;
};

Counter.prototype.getValue = function() {
  return this.count;
};

module.exports = Counter;
