var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mroute=require('./mroutes/mroute');
app.use(bodyParser.json());
var mongoose=require('mongoose');
mongoose.connect('mongodb://10.77.79.194:27017/capgemini');

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log('mongodb connection is open');
});
app.listen("8090",function(){
    console.log("Server is listening on this port");
})

app.use("/mongo-api",mroute);