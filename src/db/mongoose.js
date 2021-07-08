const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})




const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate (value) {
            if (!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate (value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate (value) {
            if( value.toLowerCase().includes('password')){
                throw new Error("'password' cannot be the part of your Password")
            }
        }
    }
})


const me = new User({
    name: '      Wasif     ',
    email: 'WaSIf28@wasif.COm',
    age: 23,
    password: '123456789'
})
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log(error)
})




const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = new Task({
    description: 'Break Eggs      '
})
todo.save().then(()=>{
        console.log(todo)
    }).catch((error)=>{
        console.log(error)
    })

