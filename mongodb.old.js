// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true} , (error, client) =>{
    if(error){
        return console.log('Unable to connect to Database');
    }

    console.log('Connected Succesfully!')

    const db = client.db(dataBaseName)

    // db.collection('users').insertOne({
    //     name: 'Yasir',
    //     age: 22

    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Hamza',
    //         age: 21
    //     }, {
    //         name: 'Waqas',
    //         age: 26
    //     }
    // ], (error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Bring Milk',
    //         status: true
    //     }, {
    //         description: 'Bring Apples',
    //         status: false
    //     }, {
    //         description: 'Do Homework',
    //         status: true
    //     }

    // ], (error, result)=>{
    //     if (error) {
    //         return console.log('Unable to enter records')
    //     }

    //     console.log(result.ops)
    // })

})

