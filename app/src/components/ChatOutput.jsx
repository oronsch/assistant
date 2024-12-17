import React from "react";

const ChatOutput = ({ messages }) => {
    return (
        <div >
            {messages.map((msg, index) => (
                <div className="chat-box__output" key={index}>
                    <strong className="chat-box--role">{msg.role === "user" ? "User" : "AI"}:</strong> {msg.content}
                </div>
            ))}
        </div>
    );
};

export default ChatOutput;
