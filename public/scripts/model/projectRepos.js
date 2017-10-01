'use strict';
var globalApp = globalApp || {};

(function(module){
  var repos = {};
  repos.all = [];
  repos.getRepos = function(callback){
    $.get('/github/user/repos')
      .then(function(data){
        repos.all = data;
      })
      .fail(function(err){
        console.error('Repos are not available',err);
      })
      .then(callback);
  }
  module.repos = repos;
})(globalApp);
