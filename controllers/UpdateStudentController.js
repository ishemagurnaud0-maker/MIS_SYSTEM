//TO UPDATE SCHOOL STUDENT DATA

const updateStudent = async(req,res)=>{
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
};

export {updateStudent};