'use strict';
var globalApp = globalApp || {};

(function(module){
  globalApp.jobs = [];

  function Job(jsonJobData){
    this.jobTitle = jsonJobData.jobTitle;
    this.employer = jsonJobData.employer;
    this.startDate = jsonJobData.startDate;
    this.endDate = jsonJobData.endDate;
    this.jobDescription = jsonJobData.jobDescription;
  }

  Job.prototype.toHtml = function(){
    var jobHTML = $('#jobTemplate').html();
    var fillJobTemplate = Handlebars.compile(jobHTML);
    $('#jobInfo').addClass('work');
    return fillJobTemplate(this);
  }

  Job.loadJobs = function (jobData){
    jobData.map(function(job){
      globalApp.jobs.push(new Job(job));
    })

    globalApp.jobs.forEach(function(job){
      $('#jobDisplay').append(job.toHtml());
    });
  }

  Job.fetchJobs = function(){
    if (localStorage.rawJob){
      Job.loadJobs(JSON.parse(localStorage.rawJob));
    }
    else {
      $.get(`scripts/model/work-exp.json`, function(response){
        localStorage.setItem('rawJob', JSON.stringify(response));
        Job.loadJobs(response);
      });
    }
  }
  module.Job = Job;
})(globalApp)
