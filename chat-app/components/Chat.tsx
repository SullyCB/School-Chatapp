import { useEffect, useState } from "react";
import Message from "./Message";

export default function Chat({ socket, username, imageId }: { socket: WebSocket, username: string, imageId: number }) {
  type Message = {
    username: string;
    imageId: number;
    message: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);

  const [currentMessage, setCurrentMessage] = useState("");

  const submitMessage = (event: any) => {
    event.preventDefault();

    const socketMessage: Message = {
      username,
      imageId,
      message: currentMessage
    }

    console.log('sending message: ', socketMessage);

    socket.send(JSON.stringify(socketMessage));

    setCurrentMessage("");
    
  }

  useEffect(() => {
    socket.addEventListener('message', function (event) {
      const message: Message = JSON.parse(event.data);
      
      setMessages(messages => [...messages, message]);

      const chatContainer = document.getElementById("chat-container");

      if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  
    });

  }, []);

  return (
    <div className="sm:rounded-2xl sm:m-6 w-full xl:m-auto xl:w-3/4 xl:h-5/6 bg-gray-700 flex flex-col space-y-6 relative drop-shadow-2xl animate__animated animate__fadeInUp">
      <div className="mx-auto my-16 bg-gray-800 w-full sm:rounded-2xl xl:w-3/4 h-3/4 flex flex-col-reverse">
        <div
          className="space-y-6 m-12 overflow-y-auto"
          id="chat-container"
        >{
          messages.map((message, index) => <Message key={index} username={message.username} imageId={message.imageId} message={message.message} />)
        }</div>
      </div>
      <div className="flex justify-center">
        <input
        id="message-input"
          type="text"
          value={currentMessage}
          placeholder={`Chat as ${username}...`}
          className="px-3 py-3 placeholder-blueGray-300
                        text-black text-blueGray-600
                         bg-white rounded text-sm border-0 
                         shadow outline-none focus:outline-none 
                         focus:ringring-blue-800 h-12 w-3/4 -my-10"
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' ? submitMessage(e) : null}
        />
      </div>
    </div>
  );
}
