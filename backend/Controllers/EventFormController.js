const EventData = require("../Models/EventForm");

const CreateEventByOrganization = async (req, res) => {
  try {
    const { name } = req.body;
    const ExisedEvent = await EventData.findOne({ name: name });

    if (ExisedEvent) {
      return res.status(402).json({ message: "Event is existed", success: false });
    }

    const CreateEvent = await EventData.create(req.body);
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
