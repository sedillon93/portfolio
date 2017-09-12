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
new Job('Web Developer-in-training', 'Code Fellows', 'August 2017', 'present', 'Learning CSS, HTML, and Javascript to create interactive websites');
new Job('Elementary Center Instructional Assistant', 'St. Thomas School', 'August 2016', 'June 2017');

$(document).ready(function(){
  for (var i = 0; i < jobs.length; i++){
    var job = $('<p>' + jobs[i].name + '</p>');
    $('body').append(job);
  }
})
