'use strict';
var globalApp = globalApp || {};

page('/about', globalApp.aboutView.showAbout);
page('/', globalApp.mainPage.showMain);
page('/projects', globalApp.projectView.showProjects);
// page('/jobs', jobsFunction);
// page('/contact', contactFunction);
page();
