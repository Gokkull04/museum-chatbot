import React from "react";
import Chatbot from "./Chatbot";
import "./index.css"; // Tailwind CSS styles

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold p-4">
        Museum Ticket Booking Chatbot
      </h1>
      <Chatbot />
    </div>
  );
}

export default App;
