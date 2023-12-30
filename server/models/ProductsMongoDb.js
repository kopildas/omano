import { MongoClient, ServerApiVersion } from'mongodb';
const uri = "mongodb+srv://kopildas451:0Pfo7wQwkzfICILO@cluster1omano.mcwszc7.mongodb.net/omanoDB?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Exporting individual collections
export const ProductsMongoDb = client.db("omanoDB").collection("products");
export const ReviewDB = client.db("omanoDB").collection("review");