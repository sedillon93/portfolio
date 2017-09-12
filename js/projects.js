'use strict';

var projects = [];

function Project(name, startDate, endDate, description, link){
  this.name = name,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description,
  this.link = link,
  projects.push(this)
}
new Project('Salmon Cookies', 'August 2017', 'August 2017', 'Prototype business website to track cookie sales at different store locations; Create customer-facing website advertising the business.', 'https://sedillon93.github.io/cookie-stand/');
new Project('Bus Mall focus group', 'August 2017', 'August 2017', 'Collect data on which products customers prefer and generate graph to track preferences', 'https://sedillon93.github.io/bus-mall/')

$(document).ready(function(){
  for (var i = 0; i < projects.length; i++){
    var project = $('<p>' + projects[i].name + '<br />' + projects[i].startDate + ' to ' + projects[i].endDate + '<br />' + projects[i].description + '<br />' + 'Check it out <a href="' + projects[i].link + '">' + 'here' + '</a>' + '</p>');
    project.addClass('project');
    $('body').append(project);
  }
})
