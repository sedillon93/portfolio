'use strict';
var globalApp = globalApp || {};

(function(module){
  let projectView = {};
  module.initProjects = function(){
    projectView.showProjects = function(){
      if (!globalApp.projects.length){
        module.Project.fetchProjects();
        module.Project.titlesOnly();
      }
      $('section.fillNavItem').hide();
      $('.projects').show();
    }
    globalApp.getRepos(globalApp.appendRepos);
  }
  module.projectView = projectView;
})(globalApp);
