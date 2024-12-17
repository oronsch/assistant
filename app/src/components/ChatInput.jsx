import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage(""); // Clear the input field
        }
    };

  

    return (
        <div className="chat-box__input">
            
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatInput;
