// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //handlebars routing 
  app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
  });

   app.get('/createdash', (req, res) => {
    res.render('createdash', { title: 'Create Dash', create: true });
  });

  app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard', create: true });
  });

  app.get('/user', (req, res) => {
    res.render('user', { title: 'User' });
  });  

  app.get('/datasets', (req, res) => {
    res.render('datasets', { title: 'My Datasets' });
  });  
}; 