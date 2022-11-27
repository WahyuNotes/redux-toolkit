import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, plusNum } from "./features/counter/counterSlice";
import {
  decrement2,
  increment2,
  changeText,
} from "./features/counter/counterSlice2";

export default function Counter() {
  const num = useSelector((state) => state.counter.num);
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector((state) => state.counter2.value2);
  const dispatch = useDispatch();
  const text = useSelector((state) => state.counter2.text);

  return (
    <div>
      <input
        type="text"
        placeholder={text}
        onChange={(e) => {
          dispatch(changeText(e.target.value));
        }}
      />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          Increment
        </button>
        <span>{count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          Decrement
        </button>
      </div>
      <div>
        <span>{num}</span>
        <span>{text}</span>
        <button aria-label="plusNum" onClick={() => dispatch(plusNum())}>
          plusNum
        </button>
      </div>
    </div>
  );
}
