
const express = require('express');
const authRouter = express.Router();

function arouter(nav){
    var authors = [
        {
            author:'C.S.Lewis',
            img: "CS_Lewis.jpg",
            genre:'Fantasy',
            Book1:'Chronicles of Narnia',
            Book2:'The Screwtape Letters'
            
        },
        {
            author:'J.K. Rowling',
            img: "jk.jpg",
            genre:'Fantasy',
            Book1:'Harry Potter',
            Book2:'Fantastic Beastes and where to find them'
        },
        {
            author:'Carolyn Keene',
            img: "carolyn.jpg",
            genre:'Fiction',
            Book1:'Nancy Drew Mystery Stories',
            Book2:'The Dana Girls Mystery Stories'
        }
    ]
    
    authRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors      
        });
    })

   
    authRouter.get('/:i1',function(req,res){
        const i1 = req.params.i1
        res.render("author",{
            nav,
            title:'Library',
            author : authors[i1]

        });
    })


     return authRouter;


}


module.exports = arouter;