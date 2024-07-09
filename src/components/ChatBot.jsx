import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import "../assets/style/chatStyle.css";

function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bienvenido, soy Markbot..." },
    { from: "bot", text: "¿Qué te gustaría saber?" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { from: "user", text: inputValue }]);
      setInputValue("");
      // Aquí puedes añadir lógica para que el bot responda
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button className="botonChat" onClick={toggleChat}>
        <FontAwesomeIcon icon={faRobot} size="2x" />
      </button>
      {isChatOpen && (
        <div className="chatBot">
          <div className="chatHeader">
            <h5>
              Markbot <FontAwesomeIcon icon={faRobot} size="1x" />
            </h5>
          </div>
          <div className="messagesContainer">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={msg.from === "bot" ? "botMessage" : "userMessage"}
              >
                {msg.text}
              </p>
            ))}
          </div>
          <div className="inputContainer">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
