'use strict';
var winston = require('winston');
var logProp = require('../../config/log_property.json');
var moment = require('moment');
winston.emitErrs = true;
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: logProp.admin.console.level,
            handleExceptions: logProp.admin.console.handleExceptions,
            json: logProp.admin.console.json,
            colorize: logProp.admin.console.colorize,
            timestamp: function() {
                return moment().format('DD/MM/YYYY hh:mm:ss');
            },
            formatter: function(options) {
                // Return string will be passed to logger.
                return options.timestamp() + ' [' + options.level.toUpperCase() +'] '+ ' [ADMIN] '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '');
            }
        }),
        new winston.transports.File({
            level: logProp.admin.file.level,
            handleExceptions: logProp.admin.file.handleExceptions,
            filename: logProp.admin.file.filename,
            json:  logProp.admin.file.json,
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