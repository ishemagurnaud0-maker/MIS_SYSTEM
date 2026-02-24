import SchoolData from '../models/class-data.js'

const getSchoolById = async(req,res,next) => {
    
        let school;
        try{
            school = await SchoolData.findById(req.params.id);
            if(school == null){
                    res.status(404).json({message:"Student not found."})
            }

    }catch(err){
        res.status(500).json({message:"Error found",err});
        console.error("Internal server error:",err);
    }
    res.school = school;
    next();
}
export {getSchoolById};