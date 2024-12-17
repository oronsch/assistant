import OpenAI from "openai";
import "dotenv/config";

// Initialize OpenAI configuration with the API key from environment variables


// Create an instance of OpenAIApi with the configuration
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

// Generate a response from OpenAI API
export const generateResponse = async (messages) => {
    // Format messages for OpenAI API
    const formattedMessages = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.message
    }));

    try {
        // Create a chat completion using OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'chatgpt-4o-latest',
            messages: formattedMessages
        });

        // Return the content of the first choice's response
        return completion.choices[0].message.content;

    } catch (error) {
        // Handle and log errors
        console.error('Error generating response:', error.message);
        throw error;
    }
};
