var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var size = process.argv[2];
// code revised from https://github.com/evanlucas/learnyoumongo/blob/master/exercises/aggregate/solution/solution.js
mongo.connect(url, function(err, db){
    if(err) throw err;
    var collection = db.collection('prices')
    collection.aggregate([
        { $match: {size: size}},
        { $group: {
            _id: 'total'
            ,total: {
                $avg: '$price'
            }
        }}
        ]).toArray(function(err,results){
            if(err) throw err;
            var o = results[0]
            console.log(Number(o.total).toFixed(2));
            db.close()
        })
})
