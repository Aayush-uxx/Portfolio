import Contact from "../models/contact.js";

const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        message: "Name is required and must have more than 2 letters",
      });
    }

    if (typeof name !== "string") {
      return res.status(400).json({
        message: "Name should be string",
      });
    }

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      return res.status(401).json({
        message: "Email should be valid",
      });
    }

    if (!message || message.trim().length < 5) {
      return res.status(401).json({
        message: "Message should be long",
      });
    }

    const newMessage = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      id: newMessage._id,
      name: newMessage.name,
      email: newMessage.email,
      data: newMessage,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

export default sendMessage;
