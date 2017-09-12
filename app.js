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

var jobs = [];

function Job(name, employer, startDate, endDate, description){
  this.name = name,
  this.employer = employer,
  this.startDate = startDate,
  this.endDate = endDate,
  this.description = description,
  jobs.push(this)
}
new Job('Web Developer-in-training', 'Code Fellows', 'August 2017', 'present', 'Learning CSS, HTML, and Javascript to create interactive websites');
new Job('Elementary Center Instructional Assistant', 'St. Thomas School', 'August 2016', 'June 2017');

var hamburgerMenu = document.getElementById('hamburgerMenu');
hamburgerMenu.addEventListener('click', displayNav);

function displayNav(){
  $('.navbar').toggle();
}
