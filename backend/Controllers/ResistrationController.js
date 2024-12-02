const ResistratedUser = require("../Models/ResistrationModel");
const EventData = require("../Models/EventForm");

const CreateResistration = async (req, res) => {
  try {
    const { name, email, number, eventId, seatCount , seatNo } = req.body;
    const ExistedUser = await ResistratedUser.findOne({
      name: name,
      email: email,
      number: number,
    });

    if (ExistedUser) {
      return res
        .status(402)
        .json({ message: "already resistrated", success: false });
    }
    const CreateUser = await ResistratedUser.create(req.body);
    const eventData = await EventData.findById(eventId); 
    let remainingSeat = eventData.remainingSeat; 
  
    //approch : 1(use seatNo is in string or other spacial character and number)
    if(seatNo.PlatinumSeat !== undefined || null){
      seatNo.PlatinumSeat.forEach((item)=>{
        const indexofPlatinumSeat = remainingSeat.PlatinumSeat.findIndex((seat)=>{
            return item === seat
        })
        remainingSeat.PlatinumSeat.splice(indexofPlatinumSeat , 1)
      })
    }

    if(seatNo.GoldSeat !== undefined || null){
      seatNo.GoldSeat.forEach((item)=>{
        const indexofGoldSeat = remainingSeat.GoldSeat.findIndex((seat)=>{
            return item === seat
        })
        remainingSeat.GoldSeat.splice(indexofGoldSeat , 1)
      })
    }
    
    if(seatNo.SilverSeat !== undefined || null){
      seatNo.SilverSeat.forEach((item)=>{
        const indexofSilverSeat = remainingSeat.SilverSeat.findIndex((seat)=>{
            return item === seat
        })
        remainingSeat.SilverSeat.splice(indexofSilverSeat , 1)
      })
    }

    const updateEventData = await EventData.findByIdAndUpdate(eventId , {
      remainingSeat:remainingSeat
    })
    res
      .status(200)
      .json({ message: "User is resistrated successfully", success: true });
  } catch (error) {
    res.status(502).json({ message: "internal server error", success: false });
    console.log(error);
  }
};

const CancelResistration = (req, res) => {
  try {
  } catch (error) {
    res.status(502).json({ message: "internal server error", success: false });
  }
};

module.exports = { CreateResistration , CancelResistration };
