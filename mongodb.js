// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true} , (error, client) =>{
    if(error){
        return console.log('Unable to connect to Database');
    }

    console.log('Connected Succesfully!')

    const db = client.db(dataBaseName)

})