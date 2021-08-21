const mongoose =require('mongoose')
const dotenv =require('dotenv')

/*connect to mongodb atlas*/
const connectdatabase=()=>{
    mongoose.connect(process.env.CONNECTION_URI ,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    }).then(con=>{
        console.log(`connect to database :${con.connection.host}`);
    })
}

module.exports= connectdatabase