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

    // db.collection('users').findOne({
    //     // name: 'Wasif'
    //     // _id: 60d23581818a8f0d3fa59e50                        //this wont work
    //     _id: ObjectID('60d23581818a8f0d3fa59e50')               //this works
        
    // }, (error,result)=> {
    //     if (error) {
    //         return console.log('Unable to Fetch User')
    //     
    //     console.log(result)
    // })


    // db.collection('users').find({ name: 'Wasif' }).toArray((error, result) => {
    //     if (error) {
    //         return console.log('Unable to Fetch User')
    //     }
        
    //     console.log(result)
    // })

    // db.collection('users').find({ name: 'Wasif' }).count((error, result) => {
    //     if (error) {
    //         return console.log('Unable to Fetch User')
    //     }
        
    //     console.log(result)
    // })

    // db.collection('tasks').findOne({_id: ObjectID('60d23877d429f20e18e7b0ec')},(error,result)=>{
    //     if (error) {
    //         return console.log('Unable to Fetch Task')
    //     }

    //     console.log(result)
    // })

    // db.collection('tasks').find({status: false}).toArray((error,result)=>{
    //     if (error) {
    //         return console.log('Unable to Fetch Task/Tasks')
    //     }

    //     console.log(result)
    // })

        // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("60d2336ed98fa30cd31408ef")
    // }, {
    //     $set: {
    //         name: 'Zikrya'
    //     }
    // })

    // updatePromise.then((result)=> {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60d2336ed98fa30cd31408ef")
    // }, {
    //     $inc: {
    //         age: 1      //only can be used for numeric type fields
    //     }
    // }).then((result)=> {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({
    //     status: false
    // },{
    //     $set: {
    //         status: true
    //     }
    // }).then( (result)=>{
    //     console.log(result)
    // }).catch( (error)=>{
    //     console.log(error)
    // })

})

