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
var salmonCookies = new Project('Salmon Cookies', 'August 2017', 'August 2017', 'Prototype business website to track cookie sales at different store locations; Create customer-facing website advertising the business.', 'https://sedillon93.github.io/cookie-stand/');
var busMall = new Project('Bus Mall focus group', 'August 2017', 'August 2017', 'Collect data on what products customers prefer and generate graph to track preferences', 'https://sedillon93.github.io/bus-mall/')

Project.prototype.toHtml = function(){
  var $newProject = $('#projectTemplate').clone();
  $newProject.attr('id', '').show();
  $newProject.find('h2')
                .text(this.name);
  $newProject.find('#dates')
                .text(this.startDate + ' to ' + this.endDate);
  $newProject.find('#description')
                .text(this.description);
  $newProject.find('#link a')
                .html('<a href="' + this.link + '">' + 'here' + '</a>');
  $newProject.appendTo('#projectDisplay');
}

salmonCookies.toHtml();
busMall.toHtml();
