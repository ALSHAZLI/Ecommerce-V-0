

const express = require('express');
const db = require('./config/db')
const app = express();
const port = process.env.PORT || 5000;
const cookie = require('cookie-parser');
app.use("./Js", express.static(__dirname + "./public"));
app.use("./Css", express.static(__dirname + "./public"));
app.set("views engine","ejs");
app.set("views","./views");
app.use(cookie());
app.use(express.json());

db.connect((err) =>{
    if (err) throw err;
    console.log('db are CONECTED SUCSSIFFLUY $$$');
})

app.use('/',require('./routes/pages'));
app.use('/api',require('./controllers/auth'));


// app.use((req,res,err,next) => {

//     console.log(err.stack)
//     console.log(err.name)
//     console.log(err.code)
//     res.status(500).json({
//         message : 'the is Wrong somseing ',
//     })
// });



const Port = 3000 ; 
app.listen(Port,() => console.log(`server runing in Port ${Port}`));