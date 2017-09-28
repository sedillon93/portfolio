'use strict';
var globalApp = globalApp || {};

(function(module){
  let $repoHTML = $('#repoTemplate').html();
  let $repoTemplate = Handlebars.compile($repoHTML);
  let $filledTemplate = $repoTemplate{
    repoName: this.repoName;
  }
})(globalApp)
