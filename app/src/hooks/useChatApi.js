import { useState } from "react";
import axios from "axios";

const useChatApi = () => {
    const [messages, setMessages] = useState([]);
    const userId = "user123"; // Example userId


    const sendMessage = async (content) => {
        const newMessage = { role: "user", content };

        // Add the user's message to the conversation
        setMessages((prev) => [...prev, newMessage]);

        try {
            const response = await axios.post("http://localhost:3005/api/chat", {
                userId, // Include userId in the request body
                message: content, // Send the message content    
            });

            // Add the AI's response to the conversation
            setMessages((prev) => [...prev, { role: "assistant", content: response.data.response }]);
        } catch (error) {
            console.error("Error sending message:", error.message);
        }
    };

    return { messages, sendMessage };
};

export default useChatApi;
