var mongoose= require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');



// // var newTodo=new Todo({
// //     text:'Cook Dinner'
// // });

// // newTodo.save().then((doc)=>{
// // console.log('Saved todo');
// // console.log(doc); 
// // },(e)=> {
// //         console.log('Unable to save todo');
// // });

// var otherTodo=new Todo({
//     text:'Edit'
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('Unable to save OtherTodo');
// });
var User=mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});
var User=new User({
email:'ateeb@gmail.com'
});
User.save().then((doc)=>{
    console.log(doc);
},(e)=>{
    console.log('Unable to connect');

});