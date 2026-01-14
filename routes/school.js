const express = require('express');
const  schoolRouter =express.Router();
const SchoolData = require('../models/class-data');

//To get all school data
schoolRouter.get ('/', async(req,res)=>{
    try{
        const schools = await SchoolData.find();
        res.status(200).json(schools);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})


//To get school data by ONE STUDENT ID
schoolRouter.get('/:id',getSchoolById,(req,res)=>{
    const schoolId = res.school.StudentsName;
    res.json({
        message:`Details of the student: ${schoolId}`,
        school: res.school});
})


//To create new SCHOOL STUDENT data


schoolRouter.post('/create', async(req,res)=>{
    try{
        console.log("Creating new Student");

        const lastStudent = await SchoolData
        .findOne({studentId: { $exists: true }})
        .sort({ studentId: -1 })
        .select('studentId');
        const lastId = lastStudent ? lastStudent.studentId : null;
        let newIdStudent = 1;
        if(lastStudent && lastStudent.studentId){
           const numericPart = parseInt(lastId.replace('STU',''));
            newIdStudent = numericPart + 1;
           }
            
        const newId= 'STU' + String(newIdStudent).padStart(3,'0');

        const newStudent = new SchoolData({
            studentId: newId,
            StudentsName: req.body.StudentsName,
            Age: req.body.Age,
            Grade: req.body.Grade,
            FeesPaid: req.body.FeesPaid
        });

        await newStudent.save();
        res.status(201).json(newStudent);

    }catch(err)
    {console.log("There is an error:",err)}
    

     
})
    
        


//TO UPDATE SCHOOL STUDENT DATA

schoolRouter.patch('/update/:id',getSchoolById,async(req,res)=>{
    if(req.body.StudentsName != null){
        res.school.StudentsName = req.body.StudentsName;
    }
    if(req.body.Age != null){
        res.school.Age = req.body.Age;
    }   
    if(req.body.Grade != null){
        res.school.Grade = req.body.Grade;
    }
    if(req.body.FeesPaid != null){
        res.school.FeesPaid = req.body.FeesPaid;
    }
    try{
        const updatedSchool = await res.school.save();
    res.json(updatedSchool);
}
catch(err){
    res.status(400).json({message:err.message});    
}
})
    



//TO DELETE SCHOOL STUDENT DATA

schoolRouter.delete('/delete/:id',getSchoolById,async(req,res)=>{
try{
    await res.school.deleteOne();
    res.json({message:'School data deleted successfully'});
}
catch(err){
    res.status(500).json({message:err.message});
}

})

//MIDDLEWARE FUNCTION TO GET SCHOOL DATA BY ID


  async function getSchoolById(req,res,next,){
    let school;
    try{
         school = await SchoolData.findById(req.params.id);
        if(school == null){
            return res.status(404).json({message:' Sorry Cannot Find school data.'});

                
        }
    }
    catch(err){
      return console.error(err);
    }
    res.school = school;
    next();
 }

module.exports = schoolRouter;