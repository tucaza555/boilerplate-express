let express = require('express');
let app = express();

console.log("Hello, World!");

/*app.get("/", function(req, res) {
  res.send("Hello Express");
});*/

/*app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});*/

/*app.use("/public", express.static(__dirname + "/public"));*/

/*app.get("/json", (req, res) => {
  if (process.env['MESSAGE_STYLE'] == "uppercase") {
    res.json({message: "Hello json".toUpperCase()});
  } else {A
    res.json({message: "Hello json"});
  }
});*/

/*app.use(function middleware(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});*/

app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});






































 module.exports = app;
