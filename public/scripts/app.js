'use strict';
var globalApp = globalApp || {};

/*
  use .reduce to turn array of objects into array of project titles & array of job titles which can then be clicked on to show more information
*/

(function(module){
  globalApp.projects = [];
  globalApp.jobs = [];

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
      globalApp.projects.push(new Project(project));
    })

    globalApp.projects.forEach(function(project){
      $('#projectDisplay').append(project.toHtml());
    });
  }

  Project.titlesOnly = function(){
    return globalApp.projects.reduce(function(allProjectsTitles, project){
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

  var initPageView = function(){
    renderAboutHTML();
    renderContactHTML();
    Job.fetchJobs();
    Project.fetchProjects();
    Project.titlesOnly();
  }

  module.Project = Project;
  module.Job = Job;
})(globalApp);
