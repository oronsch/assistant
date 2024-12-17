import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: String,
    message: String,
    timestamp: {type: Date, default: Date.now}
});

const conversationSchema = new mongoose.Schema({
    userId: String,
    messages: [messageSchema]
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
