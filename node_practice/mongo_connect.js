var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/learning_mongo";   // learning_mongo = name of the database

var findDocuments = function(db, callback) {
    var collection = db.collection('tours');
    collection.find({"tourPackage": "Snowboard Cali"}).toArray(function(err, docs) {
        console.log(docs);
        callback;
    })
}

mongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server!!");
    findDocuments(db, function() {
        db.close();
    })    
})