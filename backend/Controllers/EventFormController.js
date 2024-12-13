const EventData = require("../Models/EventForm");

const CreateEventByOrganization = async (req, res) => {
  try {
    const { name , description , date , time , location , totalSeat , organizerName , contactInfo , image , category , expireAt} = req.body;
    const ExisedEvent = await EventData.findOne({ name: name });
    const PlatinumSeat = [];
    const GoldSeat = [];
    const SilverSeat = [];
    if (ExisedEvent) {
      return res.status(402).json({ message: "Event is existed", success: false });
    }

    for(let i=1 ; i<=totalSeat.platinum ; i++){
      PlatinumSeat.push(i)
    }
    for(let i=1 ; i<=totalSeat.gold ; i++){
      GoldSeat.push(i)
    }
    for(let i=1 ; i<=totalSeat.silver ; i++){
      SilverSeat.push(i)
    }``
    
    const CreateEvent = await EventData.create({name , description , date , time , location , totalSeat , remainingSeat:{PlatinumSeat:PlatinumSeat , GoldSeat:GoldSeat , SilverSeat:SilverSeat} , organizerName , contactInfo , image , category , expireAt});
    res.status(200).json({ message: "Event is created", success: true });
  } catch (error) {
    res.status(502).json({ message: "internal server error", success: false });
    console.log(error);
  }
};

const GetAllEvents  = async (req,res) => {
  try {
    const getEvent = await EventData.find({});
    if (!getEvent) {
      return res.status(404)
          .json({message:"No events available" , success:false});
    }
    res.status(200).json({ message: "Events retrieved successfully", events:getEvent, success: true });
  } catch (error) {
    console.log(error);
    res.status(502).json({ message: "internal server error", success: false });
  }
}

const GetEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const Event = await EventData.findById(id);

    if (!Event) {
      return res.status(403).json({ message: "Event does not exist", success: false });
    }

    res
      .status(200)
      .json({ message: "Event retrieved successfully", Event: Event, success: true });
  } catch (error) {
    console.log(error);
    res.status(502).json({ message: "internal server error", success: false });
  }
};

const UpdateEventByOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const Event = await EventData.findById(id);

    if (!Event) {
      return res.status(403).json({ message: "Event does not exist", success: false });
    }

    const UpdatedEvent = await EventData.findByIdAndUpdate(id, req.body);

    res.status(200).json({ message: "Event updated successfully", success: true });
  } catch (error) {
    res.status(502).json({ message: "internal server error", success: false });
    console.log(error);
  }
};

const DeleteEventByOrganization = async (req, res) => {
    try {
        const { id } = req.params;
        const Event = await EventData.findById(id);
    
        if (!Event) {
          return res.status(403).json({ message: "Event does not exist", success: false });
        }
        const DeleteEvent = await EventData.findByIdAndDelete(id);
        res.status(200).json({ message: "Event deleted successfully", success: true });
      } catch (error) {
        res.status(502).json({ message: "internal server error", success: false });
        console.log(error);
      }
};

module.exports = {
  CreateEventByOrganization,
  GetAllEvents,
  GetEventById,
  UpdateEventByOrganization,
  DeleteEventByOrganization,
};
