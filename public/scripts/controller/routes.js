'use strict';
var globalApp = globalApp || {};

page('/', globalApp.mainPage.showMain);
page('/about', globalApp.aboutView.showAbout);
page('/projects', globalApp.projectView.showProjects);
page('/jobs', globalApp.jobView.showJobs);
page('/contact', globalApp.contactView.showContactInfo);
page();
