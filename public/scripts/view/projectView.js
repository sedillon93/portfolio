'use strict';
var globalApp = globalApp || {};

(function(module){
  globalApp.projects = [];

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
  module.Project = Project;
})(globalApp)
