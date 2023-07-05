const mongoose = require("mongoose");

const connectDatabase = () => {
    const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    console.log(`connecting to ${mongoDbUrl}`);
    mongoose.Promise = global.Promise;

    mongoose
    .connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(()=> {
        console.log("Successfully connected to database");
    })
    .catch((err)=>{
        console.log(`Could not connect to the database. Exitting now...\n${err}`);
        process.exit();
    });
};

module.exports = connectDatabase;