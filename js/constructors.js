'use strict';

function Project(name, startDate, endDate, description, link){
  this.name = name,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description,
  this.link = link
}

Project.prototype.render = function(){
  projects.push(this);
}

Project.prototype.toHtml = function(){
  var $newProject = $('#projectTemplate').clone();
  $newProject.attr('id', '')
                .show()
                .addClass('project');
  $newProject.find('h2')
                .text(this.name);
  $newProject.find('#dates')
                .text(this.startDate + ' to ' + this.endDate);
  $newProject.find('#description')
                .text(this.description);
  $newProject.find('#link')
                .attr('href', this.link);
  $newProject.appendTo('#projectDisplay');
}

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
