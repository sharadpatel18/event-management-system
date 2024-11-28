const ResistratedUser = require('../Models/ResistrationModel')

const CreateResistration = async (req,res) => {
    try {
        const { name , email , number } = req.body;
        const ExistedUser = await ResistratedUser.findOne({name:name , email:email , number:number});

        if (!ExistedUser) {
            return res.status(402)
                        .json({message:"already resistrated" , success:false})
        }

        const CreateUser = await ResistratedUser.create(req.body);
        res.status(200)
            .json({message:"User is resistrated successfully" , success:false})
    } catch (error) {
        res.status(502)
            .json({message:"internal server error" , success:false})
    }
}

module.exports = {CreateResistration}