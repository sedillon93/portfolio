'use strict';

var projects = [];
var jobs = [];

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$(document).ready(function(){
  $('div.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('div.fillNavItem').hide();
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
  $('#projectDisplay').addClass('projects');
  return fillProjectTemplate(this);
}


function Job(rawJobObj){
  this.name = rawJobObj.name,
  this.employer = rawJobObj.employer,
  this.startDate = rawJobObj.startDate,
  this.endDate = rawJobObj.endDate,
  this.description = rawJobObj.description
}

Job.prototype.toHtml = function(){
  var jobHTML = $('#jobTemplate').html();
  var fillJobTemplate = Handlebars.compile(jobHTML);
  $('#jobDisplay').addClass('work');
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
