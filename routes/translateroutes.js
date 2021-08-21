const express=require('express')
const router=express.Router()
/* it is a package to convert text from one language to another */
const translate = require('@vitalets/google-translate-api');
const Translate =require('../model/cache.js')


/* post api to post the language and text and save the response text in database =>/translate */
router.post('/translate',async (req,res)=>{

    /*get the language and text from the the user */
    const {text,language}=req.body
    
    await translate(text, {to:language}).then(response => {
             console.log(response);
             const translanguage =new Translate({
                translatedtext:response.text,
                fromlanguage:response.from.language.iso,
                translatedlanguage:response.raw[1][1]
    
             })
             /* save the data in database */
             translanguage.save()
           res.send({
                text:response.text, 
               language: response.from.language.iso,
               translatedlanguage:response.raw[1][1]
           })
        
          }).catch(err => {
              console.error(err);
              res.send(err);
          });
        
    })
/* get api to get all translatedlanguage from the database  => /getalltranslation */

    router.get('/getalltranslation',async(req,res)=>{
        const getalltranslation= await Translate.find();
        const count= await Translate.countDocuments()
        res.send({
            count:count,
            getalltranslation:getalltranslation
          
        })
    })

    /* get api to get  translatedlanguage by id from the database =>  gettranslation/:id */

    router.get('/gettranslation/:id',async(req,res)=>{
        const gettranslation= await Translate.findById(req.params.id);
     
        res.send({
            
        translation:gettranslation
          
        })
    })
    
    module.exports=router