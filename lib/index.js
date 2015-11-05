'use strict';
const levels = require('./levels.js');

class WinstonLogs {
  constructor(options) {
    if (!options) throw new Error('Missing options');

    this.options = options;
  }
}

Object.keys(levels).forEach(level => {
  WinstonLogs.prototype[level] = require('./log')[level];
});

module.exports = options => new WinstonLogs(options);
