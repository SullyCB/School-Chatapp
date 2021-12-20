import type { NextPage } from "next";
import AvatarSelector from "../components/AvatarSelector";
import BackgroundParticles from "../components/BackgroundParticles";
import "animate.css";
import { useEffect, useState } from "react";
import Chat from "../components/Chat";

const Home: NextPage = () => {
  const splashes = [
    <span>
      Check us out on{" "}
      <a className="text-red-500 cursor-pointer underline">https://red.sus!</a>
    </span>,
  ];

  const [loggedIn, setLoggedIn] = useState(false);

  const [musicStarted, setMusicStarted] = useState(false);

  const [username, setUsername] = useState("");

  const splashText = splashes[Math.floor(Math.random() * splashes.length)];

  const transitionPage = () => {
    if (username.length === 0) return;

    const panel = document.getElementById("panel");
    const btn = document.getElementById("start-btn");
    const header = document.getElementById("header");

    if (panel && btn && header) {
      btn.classList.remove("hover:bg-green-600");
      btn.classList.add("bg-opacity-50", "cursor-not-allowed");

      panel.classList.remove("animate__fadeInUp");
      panel.classList.add("animate__fadeOutDown");

      header.classList.add("animate__fadeOutUp", "animate__delay-2s");

      //Re render page after transition
      setTimeout(() => {
        setLoggedIn(true);
      }, 3000);
    }
  };

  const startMusic = () => {
    const music = new Audio("/music.mp3");
    music.loop = true;
    music.autoplay = true;
    music.defaultMuted = true;
    music.volume = 0.3;

    music.play();

    setMusicStarted(true);
  };

  return (
    <div
      className="flex w-screen h-screen justify-center overflow-hidden"
      onClick={!musicStarted ? startMusic : () => {}}
    >
      {loggedIn ? (
        <Chat />
      ) : (
        <div className="flex justify-center">
          <div className="">
            <div
              className="spacey-y-2 xl:space-y-5 m-14 text-center animate__animated"
              id="header"
            >
              <h1 className="text-white text-2xl xl:text-6xl animate__animated animate__fadeInDown">
                The Fortnite Chat App
              </h1>
              <h1 className="text-gray-200 text-xl xl:text-4xl animate__animated animate__fadeInUp animate__delay-1s">
                {splashText}
              </h1>
            </div>
            <div
              className="space-y-12 text-white text-xl xl:text-4xl bg-blue-400 rounded-2xl m-6 xl:m-auto p-6 drop-shadow-2xl animate__animated animate__fadeInUp animate__delay-1s"
              id="panel"
            >
              <AvatarSelector />
              <div className="space-y-4 xl:flex flex-row justify-evenly">
                <div>
                  <h1>Type a username...</h1>
                  <input
                    type="text"
                    placeholder="I.E. Jonsey Fortnite"
                    className="px-3 py-3 placeholder-blueGray-300
                        text-black text-blueGray-600 relative
                         bg-white rounded text-sm border-0 
                         shadow outline-none focus:outline-none 
                         focus:ringring-blue-800 w-full"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <h1
                    className={`px-3 py-3 rounded-2xl w-3/5 text-center xl:w-auto bg-green-500 cursor-pointer ${
                      username.length === 0
                        ? "bg-opacity-50 cursor-not-allowed"
                        : "hover:bg-green-600"
                    }`}
                    id="start-btn"
                    onClick={transitionPage}
                  >
                    Start Talking
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <BackgroundParticles />
    </div>
  );
};

export default Home;
