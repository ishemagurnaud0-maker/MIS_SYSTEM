import SchoolData  from '../models/class-data.js'

// Creating New student and giving him/her an id and saving her in the database
const createStudent = async (req,res)=>{
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
    

};

export {createStudent};