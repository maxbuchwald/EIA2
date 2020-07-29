import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {

    // let mongoClient: Mongo.MongoClient;
    let collection: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb+srv://max:fxXOiSbuQv79F5en@cluster0-uamzt.mongodb.net/test";

    startServer(port);
    connectToDatabase(databaseUrl);



    async function startServer(_port: number | string): Promise<void> {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collection = mongoClient.db("zauberbild").collection("bilder");
        console.log("Database connection ", collection != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }



            switch (urlWithQuery.pathname) {
                case "/save":
                    //TODO save
                    
                    break;
                case "/load":
                    //TODO load
                    break;
                case "/getall":
                    break;
                default:
                    let jsonString: string = JSON.stringify(urlWithQuery.query);
                    _response.write(jsonString);

            }

            //storeOrder(url.query);
        }

        _response.end();
    }
}
