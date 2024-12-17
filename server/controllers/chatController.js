import Conversation from '../models/chatHistory.js';
import { generateResponse } from '../services/openaiService.js';

export const handleChat = async (req, res) => {
    const { userId, message } = req.body;
    console.log(`Received message from user ${userId}: ${message}`);

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // Retrieve conversation history
        let conversation = await Conversation.findOne({ userId });
        if (!conversation) {
            conversation = new Conversation({ userId, messages: [] });
        }

        // Add user message to conversation
        conversation.messages.push({ sender: 'user', message });
        await conversation.save();

        // Generate response from OpenAI
        const response = await generateResponse(conversation.messages);

        // Add assistant response to conversation
        conversation.messages.push({ sender: 'assistant', message: response });
        await conversation.save();

        res.json({ response });
    } catch (error) {
        console.error('Error handling chat:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
