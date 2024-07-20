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

  const handleSend = async () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim().toLowerCase();
      setMessages([...messages, { from: "user", text: inputValue }]);
      setInputValue("");

      try {
        const response = await fetch("http://localhost:8000/markbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pregunta: userMessage }),
        });

        if (response.ok) {
          const data = await response.json();
          setMessages((prevMessages) => [
            ...prevMessages,
            { from: "bot", text: data.respuesta },
          ]);
        } else {
          console.error(
            "Error en la respuesta del servidor:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button className="botonChat" onClick={toggleChat}>
        Markbot <FontAwesomeIcon icon={faRobot} size="1x" />
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
              <div
                key={index}
                className={
                  msg.from === "bot"
                    ? "botMessageContainer"
                    : "userMessageContainer"
                }
              >
                {msg.from === "bot" && (
                  <FontAwesomeIcon
                    icon={faRobot}
                    size="1x"
                    className="botIcon"
                  />
                )}
                <p
                  className={msg.from === "bot" ? "botMessage" : "userMessage"}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
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
