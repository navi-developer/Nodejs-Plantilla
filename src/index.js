const express = require('express');
const app = express();
const path = require('path');

//configuracion
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')//configuracion  de motor de plantillas
app.engine('html',require('ejs').renderFile);//cambiar la terminacion ejs por html

//routes
// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname,'views/index.html'));
// });
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listening server
app.set('port', 3000);
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});