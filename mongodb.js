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

    db.collection('users').findOne({
        // name: 'Wasif'
        // _id: 60d23581818a8f0d3fa59e50                        //this wont work
        _id: ObjectID('60d23581818a8f0d3fa59e50')               //this works
        
    }, (error,result)=> {
        if (error) {
            return console.log('Unable to Fetch User')
        }
        console.log(result)
    })


    db.collection('users').find({ name: 'Wasif' }).toArray((error, result) => {
        if (error) {
            return console.log('Unable to Fetch User')
        }
        
        console.log(result)
    })

    db.collection('users').find({ name: 'Wasif' }).count((error, result) => {
        if (error) {
            return console.log('Unable to Fetch User')
        }
        
        console.log(result)
    })

    db.collection('tasks').findOne({_id: ObjectID('60d23877d429f20e18e7b0ec')},(error,result)=>{
        if (error) {
            return console.log('Unable to Fetch Task')
        }

        console.log(result)
    })

    db.collection('tasks').find({status: false}).toArray((error,result)=>{
        if (error) {
            return console.log('Unable to Fetch Task/Tasks')
        }

        console.log(result)
    })

})