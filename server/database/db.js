import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.x6lk2lg.mongodb.net/CRUD-APPLICATION?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true, });
        console.log("Database connected successfully!");
    }
    catch (error) {
        console.log('Error while connecting with the database...', error);
    }
}

export default Connection;