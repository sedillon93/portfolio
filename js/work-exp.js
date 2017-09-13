'use strict';

var jobs = [];

function Job(name, employer, startDate, endDate, description){
  this.name = name,
  this.employer = employer,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description,
  jobs.push(this)
}
var developer = new Job('Web Developer-in-training', 'Code Fellows', 'August 2017', 'present', 'Learning CSS, HTML, and Javascript to create interactive websites');
var elementaryIA = new Job('Elementary Center Instructional Assistant', 'St. Thomas School', 'August 2016', 'June 2017', 'Work with students grades 1-4');
var residentTeacher = new Job('Resident Teacher', 'University Child Development School', 'August 2015', 'June 2016', 'Work with students in grades 4-5')

Job.prototype.toHtml = function(){
  var $newJob = $('#jobTemplate').clone();
  $newJob.attr('id', '')
              .show()
              .addClass('job');
  $newJob.find('#jobTitle')
              .text(this.name);
  $newJob.find('#employer')
              .text(this.employer);
  $newJob.find('div')
              .text('From: ' + this.startDate + ' to ' + this.endDate);
  $newJob.find('#description')
              .text(this.description);
  $newJob.appendTo('.jobDisplay')
}

developer.toHtml();
elementaryIA.toHtml();
residentTeacher.toHtml();
