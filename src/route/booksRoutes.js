const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    var books = [
         {
             title: 'Chronicles of Narnia',
             author: 'C.S.Lewis',
             genre:'Fantasy',
             img: "chronicles.jpg",
             info1:"The Chronicles of Narnia is a series of fantasy novels by British author C. S. Lewis",
             info2:"The Chronicles of Narnia has been adapted for radio, television, the stage, film, and computer games."
         },
         {
             title: 'Harry Potter',
             author: 'J.K. Rowling',
             genre:'Fantasy',
             img: "harry.jpg",
             info1:"Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. ",
             info2:"The novels chronicle the lives of a young wizard, Harry Potter, and his friends"
         },
         {
             title: 'Nancy Drew Mystery Stories',
             author: 'Carolyn Keene',
             genre:'Fiction',
             img: "nancy_drew.jpg",
             info1:"Nancy Drew is a fictional character, a sleuth in an American mystery series.",
             info2:"The books are ghostwritten by a number of authors and published under the collective pseudonym Carolyn Keene."
         },

    ]
    
    booksRouter.get('/',function(req,res){
        // Bookdata.find()
        // .then(function(books){
        //     res.render("books",{
        //         nav,
        //         title:'Library',
        //         books
        //     });

        // })
        res.render("books",
        {
            nav,
            title:'Library',
            books      
        });

    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;//id is like a argument for i
        // Bookdata.findOne({_id: id})
        // .then(function(book){
        //     res.render('book',{
        //         nav,
        //         title:'Library',
        //         book
        
        //     });
        // })
        res.render("book",{
            nav,
            title:'Library',
            book : books[id]

        });

    }) 
    
 return booksRouter;
}


module.exports = router;