var demojob = require('./demoJob.js');
var cron = require('node-cron');
cron.schedule('*/1 * * * * *', function() {
  demojob.doBatch();
  console.log('running a task every second');
});
