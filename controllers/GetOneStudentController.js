
const getOneStudent = (req,res) =>{
    //To get school data by ONE STUDENT ID
        try{
             const student = res.school.StudentsName;
    res.json({
        message:`Details of the student: ${student}`,
        school: res.school
    });
    }catch(err){
        console.log("Error finding the student",err)
        res.status(500).json({message:"Error finding the student."})
    }
   
}

export {getOneStudent};
