const mongoose = require("mongoose");
require('dotenv/config');

const mongoDB_Url = process.env.DBURL



const connect = async()=>{
    try{
        await mongoose.connect(mongoDB_Url);
        console.log('MongoDB connected')




    }catch(error){
        console.log(error);

    }
}

module.exports = connect