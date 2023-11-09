import Image from "next/image";

export default function Home() {
  const whiteButton =
    "flex items-center justify-center w-[83px] h-[50px] bg-[#E9E3DA] rounded-lg shadow-custom font-bold text-[25px] transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1 hover:bg-white";
  const blueButton =
    "flex items-center justify-center w-[83px] h-[50px] bg-[#A2B2E1] rounded-lg shadow-customblue text-white font-bold text-[20px] transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1";
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#3B4664] gap-4 ">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan&display=swap');
      `}</style>
      <div className="w-[440px] h-[100px] bg-[#181F32] rounded-md"></div>
      <div className="w-[440px] h-[435px] rounded-md bg-[#262C45] flex justify-center items-center text-[#414954]">
        <div className="w-[390px] h-[380px] rounded-md bg-[#262C45] grid grid-cols-4 grid-rows-5 gap-4">
          <button className={whiteButton}>7</button>
          <button className={whiteButton}>8</button>
          <button className={whiteButton}>9</button>
          <button className={blueButton}>DEL</button>
          <button className={whiteButton}>4</button>
          <button className={whiteButton}>5</button>
          <button className={whiteButton}>6</button>
          <button className={whiteButton}>+</button>
          <button className={whiteButton}>1</button>
          <button className={whiteButton}>2</button>
          <button className={whiteButton}>3</button>
          <button className={whiteButton}>-</button>
          <button className={whiteButton}>.</button>
          <button className={whiteButton}>0</button>
          <button className={whiteButton}>/</button>
          <button className={whiteButton}>x</button>
          <button className="flex items-center justify-center w-[185px] h-[50px] bg-[#A2B2E1] rounded-lg shadow-customblue text-white font-bold text-[20px] transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1">
            RESET
          </button>
          <button className="flex items-center justify-center w-[185px] h-[50px] bg-[#F96C5B] rounded-lg shadow-customblue text-white font-bold text-[20px] col-start-3 transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
