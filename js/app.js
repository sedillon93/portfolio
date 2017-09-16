'use strict';

var projects = [];
var jobs = [];

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$(document).ready(function(){
  $('section.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('section.fillNavItem').hide();
  var identifier = event.target.id;
  $('.' + identifier).show()
}
)

function Project(rawProjectObj){
  this.projectTitle = rawProjectObj.projectTitle,
  this.startDate = rawProjectObj.startDate,
  this.endDate = rawProjectObj.endDate,
  this.description = rawProjectObj.description,
  this.projectUrl = rawProjectObj.projectUrl
}

Project.prototype.toHtml = function(){
  var projectHTML = $('#projectTemplate').html();
  var fillProjectTemplate = Handlebars.compile(projectHTML);
  $('#projectInfo').addClass('projects');
  return fillProjectTemplate(this);
}


function Job(rawJobObj){
  this.jobTitle = rawJobObj.jobTitle;
  this.employer = rawJobObj.employer;
  this.startDate = rawJobObj.startDate;
  this.endDate = rawJobObj.endDate;
  this.jobDescription = rawJobObj.jobDescription;
}

Job.prototype.toHtml = function(){
  var jobHTML = $('#jobTemplate').html();
  var fillJobTemplate = Handlebars.compile(jobHTML);
  $('#jobInfo').addClass('work');
  return fillJobTemplate(this);
}

rawProjectData.forEach(function(project){
  projects.push(new Project(project));
});

projects.forEach(function(project){
  $('#projectDisplay').append(project.toHtml());
});

rawJobData.forEach(function(job){
  jobs.push(new Job(job));
})

jobs.forEach(function(job){
  $('#jobDisplay').append(job.toHtml());
})
