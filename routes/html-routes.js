

module.exports = function(app) {

// MAIN ROUTE

app.get("/", function(req, res) {
    res.render("aboutme")
  });

//   PROJECTS ROUTE

app.get("/projects", function(req, res) {
    res.render("projects")
});
};