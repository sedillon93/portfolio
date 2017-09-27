'use strict';
var globalApp = globalApp || {};

(function(module){
  //make a get request to github to get all the repos
  $.get('/github/user/repos', function(data){
    module.repos = data;
    console.log(module.repos);
  })
})(globalApp);
