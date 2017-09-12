'use strict';

var projects = [];

function Project(name, startDate, endDate, description){
  this.name = name,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description,
  projects.push(this)
}
new Project('Salmon Cookies', 'August 2017', 'August 2017', 'Prototype business website to track cookie sales at different store locations; Create customer-facing website advertising the business.');

$(document).ready(function(){
  for (var i = 0; i < projects.length; i++){
    var project = $('<p>' + projects[i].name + '</p>');
    $('body').append(project);
  }
})
