
// To delete a Student
const deleteStudent = async(req,res) =>{
    try{
        await res.school.deleteOne();
        res.status(200).json({message:'Student deleted successfully'});
    }catch(err){
        res.status(500).json({message:"Failed to delete student."}) 
        console.error("Failed to delete student",err);
    }
}

export {deleteStudent};