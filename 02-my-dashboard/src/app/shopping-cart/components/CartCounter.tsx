"use client";
import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <span className="text-9xl my-10">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ease-linear w-[100px] m-2"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ease-linear w-[100px] m-2"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ease-linear w-[100px] m-2"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
};
