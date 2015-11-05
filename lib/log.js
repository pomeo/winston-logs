'use strict';
const winston = require('winston');
const levels = require('./levels.js');
const transports = require('./transports.js');
require('le_node');

Object.keys(levels).forEach(level => {
  exports[level] = function(msg) {
    Object.keys(this.options).forEach(option => {
      if (process.env.NODE_ENV === option) {
        let logger = new (winston.Logger);
        Object.keys(this.options[option]).forEach(transport => {
          this.options[option][transport].level = level;
          logger.add(winston.transports[transports[transport]],
                     this.options[option][transport]);
        });
        return logger[level](msg);
      }
    });
  };
});
