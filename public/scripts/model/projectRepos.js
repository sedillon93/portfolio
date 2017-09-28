'use strict';
var globalApp = globalApp || {};

(function(module){
  var repos = [];
  //make a get request to github to get all the repos
  $.get('/github/user/repos')
    .then(function(data){
      repos = data;
    })
  module.repos = repos;
})(globalApp);
