'use strict'

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/github/*', requestProxy({
  url: `https://api.github.com/*`,
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  }
}));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'})
})

app.listen(PORT, function(){
  console.log(`running on port: ${PORT}`);
});
