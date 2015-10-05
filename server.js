/**
 * Created by Jayant Bhawal on 05-10-2015.
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
	get_ip = require('ipware')().get_ip,
    path = require('path');

var port = process.env.port || '3000';

app.use(function(req, res, next) {
	var ip_info = get_ip(req);
	if(ip_info.clientIp == "::1") {
		ip_info.clientIp = "127.0.0.1:";
	}
	console.log("IP hit from: "+ip_info.clientIp);
	next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, '/public')));


app.listen(port,'0.0.0.0');
console.log("server listening at " + port + "...");
