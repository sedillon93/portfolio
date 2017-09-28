'use strict';
var globalApp = globalApp || {};

(function(module){
  var repos = [];
  $.get('/github/user/repos')
    .then(function(data){
      repos = data;
    })
    .then(function(err){
      console.error('Repos are not available',err);
    })
  module.repos = repos;
})(globalApp);
