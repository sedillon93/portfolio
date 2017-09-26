'use strict';
var globalApp = globalApp || {};

page('/about', globalApp.aboutView.showAbout);
// page('/', homeFunction);
page('/projects', globalApp.projectView.showProjects);
// page('/jobs', jobsFunction);
// page('/contact', contactFunction);
page();
