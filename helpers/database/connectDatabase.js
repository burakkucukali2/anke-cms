const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
        .then(con => {
        console.log(`MongoDB Database with HOST: ${con.connection.host}`);
    })
        .catch(err => console.log(err));
}

module.exports = connectDatabase;