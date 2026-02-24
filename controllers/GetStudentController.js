import SchoolData from '../models/class-data.js';

//To get all school data
const getAllStudents = async(req,res)=>{
    try{
        const schools = await SchoolData.find();
        res.status(200).json(schools);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

export {getAllStudents};