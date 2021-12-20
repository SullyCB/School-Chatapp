import Image from "next/image";

export default function Message({ index }: { index: number }) {
  return (
    <div className="text-lg xl:text-2xl text-gray-200 flex flex-row space-x-3">
      <Image
        src={"/therock.png"}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-row space-x-4 self-center">
        <h1 className="self-center">Jonsey Fortnite:</h1>
        <h1>HELLO WORLD {index}</h1>
      </div>
    </div>
  );
}
