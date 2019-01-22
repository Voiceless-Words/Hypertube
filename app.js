const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb+srv://hyper:hyper1234@matchacluster-e6mcr.mongodb.net/test?retryWrites=true", {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function(){
    console.log('App started on port 3000');
});

