import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      try {
        // Fetch response from OpenAI
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            },
          }
        );

        const botMessage = {
          sender: "bot",
          text: response.data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, I couldn't process that." },
        ]);
        console.error("Error fetching chatbot response:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 z-20 right-4">
      {/* Chat Icon */}
      {!isOpen && (
        <button
          className="p-4 bg-[#85132c] text-white rounded-full shadow-lg hover:bg-[#85132c]"
          onClick={toggleChat}
        >
          <AiOutlineMessage size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-72 bg-white shadow-lg rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center bg-[#85132c] text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Chat with Us</h3>
            <button onClick={toggleChat}>&times;</button>
          </div>

          {/* Chat Body */}
          <div className="h-64 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-[#85132c] text-white"
                      : "bg-gray-200 text-[#85132c]"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
            {loading && (
              <p className="text-gray-500 text-sm">Bot is typing...</p>
            )}
          </div>

          {/* Input Field */}
          <div className="flex items-center p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-l-lg p-2 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-[#85132c] text-white p-2 rounded-r-lg hover:bg-[#85132c]"
            >
              <IoMdSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
