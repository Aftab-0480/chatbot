const Chat = require("../models/chatModel");
const { getBotReply } = require("../services/chatbotService");

const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const botReply = await getBotReply(message);

    const chat = new Chat({
      userMessage: message,
      botReply: botReply,
    });

    await chat.save();

    res.json({
      user: message,
      bot: botReply,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = chatController;