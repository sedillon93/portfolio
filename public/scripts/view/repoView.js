'use strict';
var globalApp = globalApp || {};

(function(module){
  let $repoHTML = $('#repoTemplate').html();
  let $repoTemplate = Handlebars.compile($repoHTML);
  let $filledTemplate = $repoTemplate
  {
    // repoName: this.repoName;
  }

  module.appendRepos = function() {
    $('#projectDisplay').append(
        // globalApp.repos.map(console.log(this))
    );
  };
})(globalApp)
