var http =require("http");
http.createServer(function(req, res){
    var url =req.url;
    var method = req.method;
    switch(url){
        case "/products":
            res.write(url);
            res.write(method);
            res.end();
            break;
        default:
            res.write("not recognized");
            res.end();
            break;

    }

}).listen(4000);
