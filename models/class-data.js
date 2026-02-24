import mongoose from 'mongoose';
const schoolDataSchema = new mongoose.Schema({
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


export default mongoose.model('SchoolData', schoolDataSchema);
 