const mangoose = require('mongoose');
const schoolDataSchema = new mangoose.Schema({
    studentId:{
        type:String,
        required:true,
        unique:true
    },
    StudentsName:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Grade:{
        type:String,
        required:true,
    },
    FeesPaid:{
        type:Number,
        required:true
    }
});
//I want to auto generate custom id's

module.exports = mangoose.model('schoolData', schoolDataSchema);
 