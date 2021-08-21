const mongoose= require('mongoose')
/* this is chema of translated text*/ 
const schema =new mongoose.Schema({
    translatedtext:{
        type:String,
        unique:true
    },
    fromlanguage:{
        type:String
    },
    translatedlanguage:{
        type:String
    }

})


module.exports =new mongoose.model('Translate',schema);