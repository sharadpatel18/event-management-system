const EventData = require("../Models/EventForm");

const CreateEventByOrganization = async (req, res) => {
  try {
    const { name } = req.body;
    const ExisedEvent = await EventData.findOne({ name: name });

    if (ExisedEvent) {
      res.status(402).json({ message: "Event is existed", success: false });
    }

    const CreateEvent = await EventData.create(req.body);
    CreateEvent.save();
    res.status(202).json({ message: "Event is saved", success: true });
  } catch (error) {
    res.status(502).json({ message: "internal server error", success: false });
    console.log(error);
  }
};

const GetEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const Event = await EventData.findById(id);

    if (!Event) {
      res.status(403).json({ message: "event is not Existed", success: false });
    }

    res
      .status(203)
      .json({ message: "Event is existed", Event: Event, success: true });
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
      res.status(403).json({ message: "event is not Existed", success: false });
    }

    const UpdatedEvent = await EventData.findByIdAndUpdate(id, req.body);

    res.status(203).json({ message: "Event is Updated", success: true });
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
          res.status(403).json({ message: "event is not Existed", success: false });
        }
        const DeleteEvent = await EventData.findByIdAndDelete(id);
        res.status(203).json({ message: "Event is Deleted", success: true });
      } catch (error) {
        res.status(502).json({ message: "internal server error", success: false });
        console.log(error);
      }
};

module.exports = {
  CreateEventByOrganization,
  GetEventById,
  UpdateEventByOrganization,
  DeleteEventByOrganization,
};
