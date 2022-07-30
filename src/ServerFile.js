var express=require('express');
const bodyParser=require('body-parser');
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
const url="mongodb://localhost:27017";
const dbName='spotifyclone';
const cors=require('cors');

var app=express();
app.use(bodyParser.json());
app.use(cors())

app.get('/',(request,response)=>response.send('Express Server Started'))

app.get('/getUsers',(request,response)=>{
    mongoClient.connect(url,function(error,connection){
        if(error){
            console.log(error);
        }else{
            const db=connection.db(dbName);
            db.collection('users').find({}).toArray(function(error,result){
                if(error){
                    console.log(console.error());
                }else{
                    response.send(result)
                }
            })
        }
    })
})

app.post('/addUser',function(request,response){
    var varEmail1=request.body.email1;
    var varEmail2=request.body.email2;
    var varPassword=request.body.password;
    var varName=request.body.name;
    var varMonth=request.body.month;
    var varDay=request.body.day;
    var varYear=request.body.year;

    mongoClient.connect(url,function(error,clientConn){
        if(error){
            console.log(error)
        }else{
            console.log('Succesfully Connected');
            const db=clientConn.db(dbName);
            db.collection('users').insertOne({
                email1:varEmail1,
                email2:varEmail2,
                password:varPassword,
                name:varName,
                month:varMonth,
                day:varDay,
                year:varYear
            })
        }
        response.send('New User Added')
    })
})

app.listen(3001,()=>console.log('Server is started'))