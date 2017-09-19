'use strict';

var projects = [];
var jobs = [];

$.get('js/work-exp.json', function(response){
  response.forEach(function(job){
    jobs.push(new Job(job));
  })

  jobs.forEach(function(job){
    $('#jobDisplay').append(job.toHtml());
  })
});

function Project(jsonProjData){
  this.projectTitle = jsonProjData.projectTitle,
  this.startDate = jsonProjData.startDate,
  this.endDate = jsonProjData.endDate,
  this.description = jsonProjData.description,
  this.projectUrl = jsonProjData.projectUrl
}

Project.prototype.toHtml = function(){
  var projectHTML = $('#projectTemplate').html();
  var fillProjectTemplate = Handlebars.compile(projectHTML);
  $('#projectInfo').addClass('projects');
  return fillProjectTemplate(this);
}


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

  $.get(`js/{event.target.id}.json`, function(response){
    response.forEach(function(obj){
      `{event.target.id}`.push(new Project(obj));
    });

    projects.forEach(function(project){
      $('#projectDisplay').append(project.toHtml());
    });
  });
})

var initPageView = function(){
  renderAboutHTML();
  renderContactHTML();
}
