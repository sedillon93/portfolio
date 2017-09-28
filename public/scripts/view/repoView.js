'use strict';
var globalApp = globalApp || {};

(function(module){
  let $repoHTML = $('#repoTemplate').html();
  let $repoTemplate = Handlebars.compile($repoHTML);

  module.appendRepos = function() {
    $('#projectDisplay').append(
        globalApp.repos.map($repoTemplate)
    );
  };
})(globalApp)
