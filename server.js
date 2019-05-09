const express = require('express')
const bodyParser = require('body-parser')
.urlencoded({extended:false}); 
const app = express();
app.set('view engine','ejs')
app.use(bodyParser)

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
app.post('/add-singer',(req,res)=>{
    // const txtName = req.body.name;
    const { name, link, avatar } = req.body
    const id =  Math.floor(Math.random() * 100)
    const singer = new Singer(id, name, link, avatar)
    listSinger.unshift(singer);
    res.redirect('/')
})

app.listen(3000);