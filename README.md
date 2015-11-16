# winston-logs
Aggregation of winston transports
##### Requirements:
```
node.js > 4.x
```
##### Installation:
```
npm install winston-logs
```
##### Usage:
```
const log = require('winston-logs')({
  production: {
    logentries: {
      token: '12345'
    }
  },
  development: {
    'console': {
      colorize: true
    }
  }
});
```
or
```
const log = require('winston-logs')({
  production: {
    logentries: {
      token: '12345'
    },
    'console': {
      colorize: true
    }
  }
});
```
and
```
log.info('Info message');
log.warn('Warn message');
log.error('Error message');
```
