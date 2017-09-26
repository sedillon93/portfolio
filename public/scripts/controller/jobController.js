'use strict';
var globalApp = globalApp || {};

(function(module){
  let jobView = {};
  jobView.showJobs = function(){
    globalApp.Job.fetchJobs();
    $('section.fillNavItem').hide();
    $('.work').show();
  }
  module.jobView = jobView;
})(globalApp);
