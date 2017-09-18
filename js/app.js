'use strict';

var projects = [];
var jobs = [];

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

var renderProjectHTML = function(){
  rawProjectData.forEach(function(project){
    projects.push(new Project(project));
  });

  projects.forEach(function(project){
    $('#projectDisplay').append(project.toHtml());
  });
}

var renderJobHTML = function(){
  rawJobData.forEach(function(job){
    jobs.push(new Job(job));
  })

  jobs.forEach(function(job){
    $('#jobDisplay').append(job.toHtml());
  })
}

var renderAboutHTML = function(){
  var $aboutHTML = $('#aboutTemplate').html();
  var $fillAboutTemplate = Handlebars.compile($aboutHTML);
  var $filledTemplate = $fillAboutTemplate({
    greeting: `Welcome to my portfolio. Take a look around and be sure to get in touch.`,
    blurb: `This is a test blurb about myself to see how it renders to the page.`
  });
  $('#aboutInfo').addClass('about').append($filledTemplate);
}

var renderContactHTML = function(){
  var contactHTML = $('#contactTemplate').html();
  var $fillContactTemplate = Handlebars.compile(contactHTML);
  var filledTemplate = $fillContactTemplate({
    phone: `(215)-806-8039`,
    email: `sedillon93@gmail.com`
  });
  $('#contactInfo').addClass('contact').append(filledTemplate);
}

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
})

var initPageView = function(){
  renderAboutHTML();
  renderProjectHTML();
  renderJobHTML();
  renderContactHTML();
}
