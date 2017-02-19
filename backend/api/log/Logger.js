'use strict';
var winston = require('winston');
var logProp = require('../../config/log_property.json');
var moment = require('moment');
winston.emitErrs = true;
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: logProp.console.level,
            handleExceptions: logProp.console.handleExceptions,
            json: logProp.console.json,
            colorize: logProp.console.colorize,
            timestamp: function() {
                return moment().format('DD/MM/YYYY hh:mm:ss');
            },
            formatter: function(options) {
                // Return string will be passed to logger.
                return options.timestamp() + ' [' + options.level.toUpperCase() +'] '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '');
            }
        }),
        new winston.transports.File({
            level: logProp.console.level,
            handleExceptions: logProp.console.handleExceptions,
            filename: logProp.file.filename,
            timestamp: function() {
                return moment().format('DD/MM/YYYY hh:mm:ss');
            },
            formatter: function(options) {
                // Return string will be passed to logger.
                return options.timestamp() + ' [' + options.level.toUpperCase() +'] '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '');
            }
        })
    ],
    exitOnError: false
});

logger.configure({
    level: 'verbose',
    transports: [
      new (require('winston-daily-rotate-file'))(opts)
    ]
  });

module.exports = logger;