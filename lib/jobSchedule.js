var DemoJob = require('./demoJob.js');
var cron = require('node-cron');
cron.schedule('*/1 * * * * *', function(){
    // DemoJob.doBatch();
  console.log('running a task every second');
});
