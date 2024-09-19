import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome to the museum ticket booking system! How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    const userMessage = input.trim().toLowerCase();
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Bot Responses
    let botResponse =
      "Sorry, I didn’t understand that. Could you please ask about ticket rates, museum timings, or items in the museum?";

    if (
      (userMessage.includes("ticket") && userMessage.includes("price")) ||
      userMessage.includes("rate")
    ) {
      botResponse =
        "The ticket prices are:\n- Adult Ticket: $20\n- Child Ticket: $10";
    } else if (
      userMessage.includes("timings") ||
      userMessage.includes("hours")
    ) {
      botResponse =
        "The museum is open from 9:00 AM to 5:00 PM, Monday to Saturday.";
    } else if (
      userMessage.includes("things") ||
      userMessage.includes("items") ||
      userMessage.includes("oldest")
    ) {
      botResponse =
        "The museum houses ancient artifacts such as:\n- A 2,000-year-old Egyptian statue\n- A 500-year-old medieval armor\n- The original manuscripts from the 15th century.";
    }

    setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    setInput("");
  };

  return (
    <div className="chatbot-container bg-gray-100 p-4 w-full max-w-md mx-auto rounded-lg shadow-md">
      <div className="chatbot-messages bg-white p-4 h-80 overflow-y-auto mb-4 rounded">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded-lg ${
              message.sender === "bot"
                ? "bg-blue-100 text-left"
                : "bg-green-100 text-right"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input flex">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
  
};

export default Chatbot;
