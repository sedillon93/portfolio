'use strict';
var globalApp = globalApp || {};

(function(module){
  let projectView = {};
  projectView.showProjects = function(){
    if (!globalApp.projects.length){
      module.Project.fetchProjects();
      module.Project.titlesOnly();
    }
    $('section.fillNavItem').hide();
    $('.projects').show();
  }
  module.projectView = projectView;
})(globalApp);
