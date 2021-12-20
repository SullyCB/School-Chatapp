import { useEffect } from "react";
import Message from "./Message";

export default function Chat() {
  useEffect(() => {
    /*
    document.getElementById("chat-app").scrollTop = document.getElementById(
      "chat-app"
    ).scrollHeight;
    */
    const chatContainer = document.getElementById("chat-container");

    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  }, []);

  return (
    <div className="sm:rounded-2xl sm:m-6 w-full xl:m-auto xl:w-3/4 xl:h-5/6 bg-gray-700 flex flex-col space-y-6 relative drop-shadow-2xl animate__animated animate__fadeInUp">
      <div className="mx-auto my-16 bg-gray-800 w-full sm:rounded-2xl xl:w-3/4 h-3/4 flex flex-col-reverse">
        <div className="space-y-6 m-12 overflow-y-auto" id="chat-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index): JSX.Element => {
            return <Message index={index} />;
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Chat as Jonsey Fortnite..."
          className="px-3 py-3 placeholder-blueGray-300
                        text-black text-blueGray-600
                         bg-white rounded text-sm border-0 
                         shadow outline-none focus:outline-none 
                         focus:ringring-blue-800 h-12 w-3/4 -my-10"
        />
      </div>
    </div>
  );
}
