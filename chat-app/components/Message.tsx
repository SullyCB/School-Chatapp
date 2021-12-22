import Image from "next/image";

export default function Message({ username, imageId, message }: { username: string; imageId: number; message: string }) {
  return (
    <div className="text-lg xl:text-2xl text-gray-200 flex flex-row space-x-3 animate__animated animate__fadeIn animate__faster">
      <Image
        src={`/${imageId}-av.png`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-row space-x-4 self-center">
        <h1 className="self-center text-yellow-100">{username}</h1>
        <h1>{message}</h1>
      </div>
    </div>
  );
}