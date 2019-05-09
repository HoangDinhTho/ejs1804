const express = require('express')
const app = express();
app.set('view engine','ejs')

const { 
    Singer, 
    avatarLink, 
    profileLink, 
    listSinger 
} = require('./model/Singer')

app.get('/',(req,res)=>{
    res.render('home', { listSinger, avatarLink, profileLink });
})

app.get('/add-singer',(req,res)=>{
    res.render('add-singer');
})

app.listen(3000);