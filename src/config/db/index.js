const mongoose = require('mongoose');




async function connect(){

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/DangoLibraries_Dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected');
    }
    catch (err) {
        console.log('cant connect');
    }
    }

module.exports = { connect };