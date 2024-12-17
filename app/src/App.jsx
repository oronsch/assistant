import React from "react";
import ChatInput from "./components/ChatInput";
import ChatOutput from "./components/ChatOutput";
import useChatApi from "./hooks/useChatApi";

const App = () => {
  const { messages, sendMessage } = useChatApi();

  return (
    <div className="container">
      <h1><span className="header-spacial-charts">A</span>ss<span className="header-spacial-charts">i</span>stant</h1>
      <div className="chat-box">
        <ChatOutput messages={messages} />
        <ChatInput onSend={sendMessage} />
      </div>
     
    </div>
  );
};

export default App;
