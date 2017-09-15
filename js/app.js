'use strict';

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

var projects = [];
var jobs = [];

function Project(projectTitle, startDate, endDate, description, projectUrl){
  this.projectTitle = projectTitle,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description,
  this.projectUrl = projectUrl
}

Project.prototype.toHtml = function(){
  console.log('working?');
  var projectHTML = $('#projectTemplate').html();
  var fillProjectTemplate = Handlebars.compile(projectHTML);
  this.attr('id', '')
                .show()
                .addClass('project');
  return fillProjectTemplate(this);
}

projects.forEach(function(project){
  project.appendTo('#projectDisplay');
});

function Job(name, employer, startDate, endDate, description){
  this.name = name,
  this.employer = employer,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description
}

Job.prototype.render = function(){
  jobs.push(this);
}

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

projects.forEach(function(project){
  project.populateProjectArray();
});

projects.forEach(function(project){
  project.toHtml();
}
);
