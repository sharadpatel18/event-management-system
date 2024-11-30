const ResistratedUser = require('../Models/ResistrationModel')
const EventData = require('../Models/EventForm');

const CreateResistration = async (req,res) => {
    try {
        const { name , email , number , eventId , seatCount} = req.body;
        const ExistedUser = await ResistratedUser.findOne({name:name , email:email , number:number});

        if (ExistedUser) {
            return res.status(402)
                        .json({message:"already resistrated" , success:false})
        }

        const CreateUser = await ResistratedUser.create(req.body);
        const eventData = await EventData.findById(eventId);
        console.log("remainingseat",eventData.remainingSeat);
        const updateSeat = await EventData.findByIdAndUpdate(eventId , {remainingSeat:eventData.remainingSeat-seatCount})
        res.status(200)
            .json({message:"User is resistrated successfully"   , success:true})
            
        
    } catch (error) {
        res.status(502)
            .json({message:"internal server error" , success:false})
            console.log(error);
            
    }
}


const CancelResistration = (req,res) => {
    try {
        
    } catch (error) {
        res.status(502)
            .json({message:"internal server error" , success:false})
    }
}

module.exports = {CreateResistration}