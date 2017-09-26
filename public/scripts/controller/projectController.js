'use strict';
var globalApp = globalApp || {};

(function(module){
  let projectView = {};
  projectView.showProjects = function(){
    $('#projectDisplay').empty();
    $('section.fillNavItem').hide();
    module.Project.fetchProjects();
    $('.projects').show();
  }
  module.projectView = projectView;
})(globalApp);
