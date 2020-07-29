"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const database_1 = require("./database");
var Endabgabe;
(function (Endabgabe) {
    let mongoClient;
    let collection;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://max:fxXOiSbuQv79F5en@cluster0-uamzt.mongodb.net/test";
    startServer(port);
    async function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
        await database_1.Database.connectToDatabase(databaseUrl);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let urlWithQuery = Url.parse(_request.url, true);
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            switch (urlWithQuery.pathname) {
                case "/save":
                    //TODO save
                    console.log(urlWithQuery.query);
                    DbJsonResponse(_response, await database_1.Database.insert(urlWithQuery.query));
                    break;
                case "/load":
                    //TODO load
                    break;
                case "/getall":
                    DbJsonResponse(_response, await database_1.Database.findAll());
                    break;
                default:
                    let jsonString = JSON.stringify(urlWithQuery.query);
                    _response.write(jsonString);
            }
            //storeOrder(url.query);
        }
        _response.end();
    }
    // tslint:disable-next-line: no-any
    function DbJsonResponse(_response, _result) {
        _response.setHeader("content-type", "application/json");
        _response.write(JSON.stringify(_result));
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=Server.js.map