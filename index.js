const   htt = require('http'),
        express = require('express'),
        fs = require('fs'),
        xmlParse = require('xslt-procesor'). xmlParse,
        xslProcess = require('xslt-processor').xsltProcess,
        router = express(),
        server = http.creatServer(router);

router.get('/', function(req, res){

    res.writeHead(200, {'Content-Type' : 'txt/html'});

    let xml = fs.readFileSync('menu.xml', 'utf8'),
        xsl = fs.readFileSync('menu.xsl', 'utf8');

        xml = xmlParse(xml);
        xsl = xmlPare(xsl);

        let html = xsltProcess(xml, xsl);

        res.end(html.toString());
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function()
{
        const addr = server.address();
        console.log("Server listening at", addr.address + ":")
})