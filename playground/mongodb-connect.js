// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDb Server');

}
console.log('Connected to MongoDb Server!');

db.collection('Todos').insertOne({
    text:'Walk the dog 2.0',
    completed:false

},(err,result)=>{
if(err){
    return console.log('Unable to insert todo',err);
}
console.log(JSON.stringify(result.ops,undefined,2));
});

// db.close();
 });