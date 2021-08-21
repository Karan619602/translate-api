const chai  =require('chai')
const chaiHttp  =require('chai-http')
//Assertion should
chai.should()

chai.use(chaiHttp);

describe('Translation api',function(){
    /* 
    test the get route
    */

    describe('GET /getalltranslation',function(){
        it('It should Get all the translation',function(done){
            chai.request('http://localhost:4000')
            .get('/getalltranslation')
            .end((err,response)=>{
              
                done();
            })
        })
    })

    describe('GET /getalltranslation',()=>{
        it('It should  NOT Get all the translation',(done)=>{
            chai.request('http://localhost:4000')
            .get('/getalltranslations')
            .end((err,response)=>{
                done();
            })
        })
    })
     /* 
    test the get by ID route route
    */
    describe('GET by ID /gettranslation/:id',function(){
        it('It should Get  translation by id',function(done){
            chai.request('http://localhost:4000')
            .get('/gettranslation/:id')
            .end((err,response)=>{
              
                done();
            })
        })
    })

    describe('GET By Id /gettranslation/:id',()=>{
        it('It should  NOT Get  translation by id',(done)=>{
            chai.request('http://localhost:4000')
            .get('/gettranslation/:id')
            .end((err,response)=>{
                done();
            })
        })
    })
     /* 
    test the post route
    */
    describe('POST /translate',function(){
        it('It should post  translation ',function(done){
            chai.request('http://localhost:4000')
            .post('/translate')
            .end((err,response)=>{
              
                done();
            })
        })
    })

    describe('POST /translate',()=>{
        it('It should  NOT post  translation',(done)=>{
            chai.request('http://localhost:4000')
            .post('/translates')
            .end((err,response)=>{
                done();
            })
        })
    })
})