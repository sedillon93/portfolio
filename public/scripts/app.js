'use strict';
var globalApp = globalApp || {};

var projects = [];
var jobs = [];

/*
  use .reduce to turn array of objects into array of project titles & array of job titles which can then be clicked on to show more information
*/

(function(module){
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

  Project.loadProjects = function (projectData){
    projectData.map(function(project){
      projects.push(new Project(project));
    })

    projects.forEach(function(project){
      $('#projectDisplay').append(project.toHtml());
    });
  }

  Project.titlesOnly = function(){
    return projects.reduce(function(allProjectsTitles, project){
      allProjectsTitles.push(project.projectTitle);
      return allProjectsTitles;
    }, []);
  }

  Project.fetchProjects = function(){
    //fix this so that if local storage gets cleared, fetchProjects is called again and things get stored locally; right now just keeps bouncing to the else statement if you clear local storage on the desktop
    if (localStorage.rawProject){
      Project.loadProjects(JSON.parse(localStorage.rawProject));
    }
    else {
      $.get(`scripts/model/projects.json`, function(response){
        localStorage.setItem('rawProject', JSON.stringify(response));
        Project.loadProjects(response);
      });
    }
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

  Job.loadJobs = function (jobData){
    jobData.map(function(job){
      jobs.push(new Job(job));
    })

    jobs.forEach(function(job){
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

  var initPageView = function(){
    renderAboutHTML();
    renderContactHTML();
    Job.fetchJobs();
    Project.fetchProjects();
    Project.titlesOnly();
  }

  module.Project = Project;
  module.Job = Job;
  module.renderContactHTML = renderContactHTML;
  module.renderAboutHTML = renderAboutHTML;
})(globalApp);
