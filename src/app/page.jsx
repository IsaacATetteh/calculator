import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#3B4664] gap-4">
      <div className="w-[490px] h-[115px] bg-[#181F32] rounded-md"></div>
      <div className="w-[490px] h-[50%] rounded-md bg-[#262C45] grid grid-cols-5 grid-rows-4">
        <div className="w-[95px] h-[60px] border-2 border-black"></div>
        <div className="w-[95px] h-[60px] border-2 border-black"></div>
        <div className="w-[95px] h-[60px] border-2 border-black"></div>
        <div className="w-[95px] h-[60px] border-2 border-black"></div>
      </div>
    </div>
  );
}
