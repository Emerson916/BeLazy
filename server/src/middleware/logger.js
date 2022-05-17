const winston = require('winston');

const util = require('util');

const LOG_LEVEL = process.env.LOG_LEVEL ?? 'debug';
console.log("LOG LEVEL", LOG_LEVEL);

function transform(info, _opts) {
  const args = info[Symbol.for('splat')];
  if (args) { info.message = util.format(info.message, ...args); }
  return info;
}

function utilFormatter() { return {transform}; }
const log = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
    utilFormatter(),     // <-- this is what changed
    winston.format.colorize(),
    winston.format.printf(({level, message, label, timestamp}) => `${timestamp} ${label || '-'} ${level}: ${message}`),
  ),
  transports: [
    new winston.transports.Stream({
      stream: process.stderr,
      level: LOG_LEVEL,
    })
  ],
});

function mw() {
  return (req, _, next) => {
    req.log = log;
    next();
  }
}

module.exports = mw;