const mongoose = require('mongoose');


const ConnectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Connection to Database successful");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = ConnectMongoDb;