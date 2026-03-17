const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'starlight';
const collectionName = 'metrics';
async function getMetrics() {
    const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const metrics = await collection.find().toArray();
    return metrics;
}
module.exports = { getMetrics };