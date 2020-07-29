"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
var Database;
(function (Database) {
    let mongoClient;
    let collection;
    /**
     * Establish database connection
     * @param _url
     */
    async function connectToDatabase(_url) {
        mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("zauberbild").collection("bilder");
        console.log("Database connection", collection != undefined);
    }
    Database.connectToDatabase = connectToDatabase;
    /**
     * Get all orders from database
     */
    async function findAll() {
        console.log("findAll");
        let cursor = await collection.find();
        return cursor.toArray();
    }
    Database.findAll = findAll;
    /**
     * Get a specific order from the database
     * @param _query
     *
    export async function findOne(_query: ParsedUrlQuery): Promise<Order> {
        let id: string = <string>_query["id"];
        console.log("searching for _id: " + id);
        let orderPromise = await collection.findOne({_id: new Mongo.ObjectID(id)});
        return orderPromise;
    }

    /**
     * Update a specific order from the database
     * @param _query
     */
    /*
    export async function update(_query: ParsedUrlQuery): Promise<Mongo.UpdateWriteOpResult> {
        let id: string = <string>_query["id"];
        return await collection.replaceOne({_id: new Mongo.ObjectID(id)}, orderToAdd);
    }

    /**
     * Insert a specific order to the database
     * @param _query
     */
    async function insert(_canvas) {
        let image = new ImageData(0, 0);
        console.log("inserting " + _canvas.data);
        return await collection.insertOne(image);
    }
    Database.insert = insert;
    /**
     * Remove a specific order from the database
     * @param _query
     */
    async function removeOne(_query) {
        let id = _query["id"];
        let objID = new Mongo.ObjectId(id);
        console.log("remove", id);
        return await collection.deleteOne({ "_id": objID });
    }
    Database.removeOne = removeOne;
})(Database = exports.Database || (exports.Database = {}));
//# sourceMappingURL=database.js.map