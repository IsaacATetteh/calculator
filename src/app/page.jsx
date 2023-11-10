"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const whiteButton =
    "flex items-center justify-center w-[83px] h-[50px] bg-[#E9E3DA] rounded-lg shadow-custom font-bold text-[25px] transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1 hover:bg-white";
  const blueButton =
    "flex items-center justify-center w-[83px] h-[50px] bg-[#A2B2E1] rounded-lg shadow-customblue text-white font-bold text-[20px] transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1";

  const [input, setInput] = useState("");

  function calculate(newValue) {
    if (newValue === "RESET") {
      setInput("");
      return;
    }
    if (newValue === "del") {
      setInput(input.slice(0, -1));
      return;
    }
    if (newValue === "=") {
      try {
        // Evaluate the expression
        setInput(eval(input).toString());
        return;
      } catch (error) {
        setInput("Error");
        return;
      }
    }
    setInput((input) => input + newValue);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#3B4664] gap-4 ">
      <div className="w-[440px] h-[100px] bg-[#181F32] rounded-lg text-white font-bold text-[36px] flex items-center justify-end pr-[25px]">
        <p className="">{input}</p>
      </div>
      <div className="w-[440px] h-[435px] rounded-lg bg-[#262C45] flex justify-center items-center text-[#414954]">
        <div className="w-[390px] h-[380px]  bg-[#262C45] grid grid-cols-4 grid-rows-5 gap-4">
          <button className={whiteButton} onClick={() => calculate(7)}>
            7
          </button>
          <button className={whiteButton} onClick={() => calculate(8)}>
            8
          </button>
          <button className={whiteButton} onClick={() => calculate(9)}>
            9
          </button>
          <button className={blueButton} onClick={() => calculate("del")}>
            DEL
          </button>
          <button className={whiteButton} onClick={() => calculate(4)}>
            4
          </button>
          <button className={whiteButton} onClick={() => calculate(5)}>
            5
          </button>
          <button className={whiteButton} onClick={() => calculate(6)}>
            6
          </button>
          <button className={whiteButton} onClick={() => calculate("+")}>
            +
          </button>
          <button className={whiteButton} onClick={() => calculate(1)}>
            1
          </button>
          <button className={whiteButton} onClick={() => calculate(2)}>
            2
          </button>
          <button className={whiteButton} onClick={() => calculate(3)}>
            3
          </button>
          <button className={whiteButton} onClick={() => calculate("-")}>
            -
          </button>
          <button className={whiteButton} onClick={() => calculate(".")}>
            .
          </button>
          <button className={whiteButton} onClick={() => calculate(0)}>
            0
          </button>
          <button className={whiteButton} onClick={() => calculate("/")}>
            /
          </button>
          <button className={whiteButton} onClick={() => calculate("*")}>
            x
          </button>
          <button
            className="flex items-center justify-center w-[185px] h-[50px] bg-[#A2B2E1] rounded-lg shadow-customblue text-white font-bold text-[20px] transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1"
            onClick={() => calculate("RESET")}
          >
            RESET
          </button>
          <button
            className={
              "flex items-center justify-center w-[185px] h-[50px] bg-[#F96C5B] rounded-lg shadow-customblue text-white font-bold text-[20px] col-start-3 transform transition duration-75 ease-in-out active:shadow-none active:translate-y-1"
            }
            onClick={() => calculate("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
