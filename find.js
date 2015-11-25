var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2];
mongo.connect(url, function(err, db){
    if(err) throw err;
    var collection = db.collection('parrots');
    collection.find({
        age:{
          $gt: +age
        }
    }).toArray(function(err, documents){
        
        console.log(documents)
        db.close()
    })
    
});