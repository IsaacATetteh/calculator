import Image from "next/image";

export default function Home() {
  const whiteButton =
    "flex items-center justify-center w-[83px] h-[50px] bg-[#E9E3DA] rounded-lg shadow-custom";
  const blueButton =
    "flex items-center justify-center w-[83px] h-[50px] bg-[#A2B2E1] rounded-lg shadow-customblue";
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#3B4664] font-league-spartan gap-4">
      <div className="w-[440px] h-[100px] bg-[#181F32] rounded-md"></div>
      <div className="w-[440px] h-[435px] rounded-md bg-[#262C45] flex justify-center items-center">
        <div className="w-[390px] border-2 border-white h-[380px] rounded-md bg-[#262C45] grid grid-cols-4 grid-rows-5 gap-4">
          <button className={whiteButton}>9</button>
          <button className={whiteButton}>8</button>
          <button className={whiteButton}>7</button>
          <button className={blueButton}>7</button>
        </div>
      </div>
    </div>
  );
}
