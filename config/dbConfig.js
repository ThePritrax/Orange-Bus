const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url)
const db = mongoose.connection;

db.on('connected', ()=> {
    console.log('Connection to database succesful');
})
db.on('error', ()=> {
    console.log('Connection to database failed');
})