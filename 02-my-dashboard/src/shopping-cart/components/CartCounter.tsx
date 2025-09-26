"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCount, substractOne } from "@/store/counter/counterSlice";
import { count } from "console";
import { useEffect } from "react";

interface Props {
  value?: number;
}
export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json())
  console.log(data);

  return data;
}


export const CartCounter = ({ value = 10 }: Props) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])


  return (
    <>
      <span className="text-9xl my-10">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ease-linear w-[100px] m-2"
        // onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
        <button
          onClick={() => dispatch(resetCount(0))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ease-linear w-[100px] m-2"
        // onClick={() => setCounter(0)}
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all ease-linear w-[100px] m-2"
        // onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
};
