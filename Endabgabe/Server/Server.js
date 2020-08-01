"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
// import * as Url from "url";
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    // let mongoClient: Mongo.MongoClient;
    let collection;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://max:fxXOiSbuQv79F5en@cluster0-uamzt.mongodb.net/test";
    startServer(port);
    connectToDatabase(databaseUrl);
    async function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        // server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collection = mongoClient.db("zauberbild").collection("bilder");
        console.log("Database connection ", collection != undefined);
    }
    // async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    //     console.log("What's up?");
    //     _response.setHeader("content-type", "text/html; charset=utf-8");
    //     _response.setHeader("Access-Control-Allow-Origin", "*");
    //     if (_request.url) {
    //         let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
    //         let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
    //         for (let key in url.query) {
    //             _response.write(key + ":" + url.query[key] + "<br/>");
    //         }
    //         switch (urlWithQuery.pathname) {
    //             case "/save":
    //                 //TODO save
    //                 break;
    //             case "/load":
    //                 //TODO load
    //                 break;
    //             case "/getall":
    //                 break;
    //             default:
    //                 let jsonString: string = JSON.stringify(urlWithQuery.query);
    //                 _response.write(jsonString);
    //         }
    //         //storeOrder(url.query);
    //     }
    //     _response.end();
    // }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=Server.js.map