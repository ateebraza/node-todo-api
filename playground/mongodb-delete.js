// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDb Server');

}
console.log('Connected to MongoDb Server!');

// db.collection('Todos').deleteMany({text:'Something'}).then((result)=>{
// console.log(result);
// });
// db.collection('Todos').deleteOne({text:'Walk the dog 2.0'}).then((result)=>{
//     console.log(result);
// });
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
});
//db.close();
 });