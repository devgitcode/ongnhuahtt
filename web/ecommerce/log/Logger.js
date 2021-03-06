'use strict';
var winston = require('winston');
var logProp = require('../../config/log_property.json');
var moment = require('moment');
winston.emitErrs = true;
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: logProp.ecommerce.console.level,
            handleExceptions: logProp.ecommerce.console.handleExceptions,
            json: logProp.ecommerce.console.json,
            colorize: logProp.ecommerce.console.colorize,
            timestamp: function() {
                return moment().format('DD/MM/YYYY hh:mm:ss');
            },
            formatter: function(options) {
                // Return string will be passed to logger.
                return options.timestamp() + ' [' + options.level.toUpperCase() +'] '+ ' [ECOMMERCE] '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '');
            }
        }),
        new winston.transports.File({
            level: logProp.ecommerce.file.level,
            handleExceptions: logProp.ecommerce.file.handleExceptions,
            filename: logProp.ecommerce.file.filename,
            json:  logProp.ecommerce.file.json,
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
// var options = {
//     from: new Date - 24 * 60 * 60 * 1000,
//     until: new Date,
//     limit: 10,
//     start: 0,
//     order: 'desc',
//     fields: ['message']
// };
// logger.configure({
//     level: 'verbose',
//     transports: [
//       new (require('winston-daily-rotate-file'))(opts)
//     ]
//   });

module.exports = logger;