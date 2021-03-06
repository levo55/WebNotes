var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(16000);
console.log('Listening on port 16000');