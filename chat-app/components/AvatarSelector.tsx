import Image from "next/image";
import { useState } from "react";
//import { IoReloadCircle } from "react-icons/io5";

export default function AvatarSelector() {

  //Avatar list from the image names in the public static image directory.
  const avatarList = [
    "therock",
    "catdude",
    "marshmello",
    "skulltrooper"
  ];

  const [currentAvatar, setCurrentAvatar] = useState(0);

  const changeAvatar = () => {
    if (currentAvatar === avatarList.length - 1) setCurrentAvatar(0);
    else setCurrentAvatar(currentAvatar + 1);

  }

  return (
    <div className="flex justify-center">
      <div className="text-center space-y-3 text-xl xl:text-3xl">
      <Image
          src={`/${avatarList[currentAvatar]}.png`}
          width={200}
          height={200}
          objectFit="cover"
          className="rounded-full"
        />
        <h1 className="p-2 rounded-2xl bg-blue-600 hover:bg-blue-700 cursor-pointer" onClick={changeAvatar}>Change Picture</h1>
      </div>
    </div>
  );
}