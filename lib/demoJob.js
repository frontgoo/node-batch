var fs = require('fs');
var lineReader = require('line-reader');
var http = require('http');
var log4js = require('log4js');
log4js.configure('../conf/log4j.json');
var logger = log4js.getLogger('normal');
var appConfig = require('../conf/app.json');
var Utils = require('./utils.js');
var Job = require('./job.js');

exports.doBatch = function() {
  http.get("http://www.baidu.com", (res) => {
    logger.info(`responseCode : ${res.statusCode}`);
    res.on("data", function(data) {
      // logger.info(`resultData is : ${data}`);
    });
  });
};


function readLine() {
  lineReader.eachLine(appConfig.applyBatchFile, function(line, last) {
    http.get(appConfig.fraudCheckApiUrl + '/' + line, (res) => {
      logger.info(`ApplyCode [ ${line} ] process begin ..`);
      logger.info(`ApplyCode [ ${line} ] resultCode : ${res.statusCode}`);
      res.on("data", function(data) {
        logger.info(`ApplyCode [ ${line} ] resultData is : ${data}`);
        logger.info(`ApplyCode [ ${line} ] process end !`);
      });
    }).on('error', (e) => {
      logger.info(`ApplyCode [ ${line} ] process got error: ${e.message}`);
    });
  });
}
