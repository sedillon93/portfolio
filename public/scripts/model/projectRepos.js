'use strict';
var globalApp = globalApp || {};

(function(module){
  var repos = [];
  module.getRepos = function(callback){
    $.get('/github/user/repos')
      .then(function(data){
        repos = data;
      })
      .then(function(err){
        console.error('Repos are not available',err);
      })
      .then(callback);
  }
  module.repos = repos;
})(globalApp);
