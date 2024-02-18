const mongoose = require('mongoose');

const mongo_uri = process.env['MONGO_URI']

async function initialiseDatabase(){
  try{
    await mongoose.connect(mongo_uri);
    console.log('Database connected');
  }catch(error){
    console.log('Error connecting to database', error);
  }
}

module.exports = initialiseDatabase;