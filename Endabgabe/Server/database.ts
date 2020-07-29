import * as Mongo from "mongodb";
import {ParsedUrlQuery} from "querystring";


export namespace Database {


    let mongoClient: Mongo.MongoClient;
    let collection: Mongo.Collection;

    /**
     * Establish database connection
     * @param _url
     */
    export async function connectToDatabase(_url: string): Promise<void> {
        mongoClient = new Mongo.MongoClient(_url, {useNewUrlParser: true, useUnifiedTopology: true});
        await mongoClient.connect();
        collection = mongoClient.db("zauberbild").collection("bilder");
        console.log("Database connection", collection != undefined);
    }

    /**
     * Get all orders from database
     */
    export async function findAll(): Promise<String[]> {
        console.log("findAll");
        let cursor: Mongo.Cursor<String> = await collection.find();
        return cursor.toArray();
    }

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
    export async function insert(_canvas: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {

        let image: ImageData = new ImageData(0, 0);
        console.log("inserting " + _canvas.data);
        return await collection.insertOne(image);
    }

    /**
     * Remove a specific order from the database
     * @param _query
     */
    export async function removeOne(_query: ParsedUrlQuery): Promise<Mongo.DeleteWriteOpResultObject> {
        let id: string = <string>_query["id"];
        let objID: Mongo.ObjectId = new Mongo.ObjectId(id);
        console.log("remove", id);
        return await collection.deleteOne({"_id": objID});
    }

}