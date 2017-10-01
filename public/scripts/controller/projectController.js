'use strict';
var globalApp = globalApp || {};

(function(module){
  let projectView = {};
  projectView.initProjects = function(){
    if (!globalApp.projects.length){
      globalApp.Project.fetchProjects();
      globalApp.Project.titlesOnly();
    }
    $('section.fillNavItem').hide();
    $('.projects').show();
    globalApp.repos.getRepos(globalApp.appendRepos);
  }
  module.projectView = projectView;
})(globalApp);
