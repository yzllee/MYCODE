/**
 * Created by mac on 16/7/4.
 */
var http = require('http');
var fs = require("fs");

http.createServer(function (request, response) {
    if (request.url == "/index.html") {
        response.end(fs.readFileSync("index.html"));
    } else if (request.url.match(/\/server/)) {
        var p = /(\?|\&)([^=]+)=([^&]+)/g;
        var params = {};
        while (true) {
            var result = p.exec(request.url);
            console.log(result);
            if (result) {
                params[result[2]] = result[3];
            } else {
                break;
            }
        }
        response.end(decodeURI(params['name1'])+decodeURI(params['name2']));
    } else {
        response.end("<h1>404 not found</h1>");
    }
}).listen(8070);