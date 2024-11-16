import React , { useState, useEffect, useRef } from "react";

const Counter = () => {

    const [count, SetCount] = useState(0);

    const incrementCount = () => {
        SetCount(count+1);
    }

    const reset = () => {
        SetCount(0);
    }

    const decrement = () => {
        SetCount(count-1);
    }

    return (
        <div className="p-5 w-100 h-screen bg-slate-900 flex justify-center items-center">
            <div className="w-[80%] h-auto flex flex-col">
                <h1 className="text-sky-400 text-[4rem]">
                    Counter Component
                </h1>

                <p className="text-[3rem] text-white">Count : {count}</p>
                <div className="flex items-center space-x-4">
                <button onClick={incrementCount} className="bg-green-700 w-[200px] rounded-md py-4 text-white text-[1.5rem]">Increment</button>
                <button onClick={decrement} className="bg-blue-700 ml-60 w-[200px] rounded-md py-4 text-white text-[1.5rem]">Decrement</button>
                <button onClick={reset} className="bg-red-700 ml-60 w-[200px] rounded-md py-4 text-white text-[1.5rem]">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;