import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementAsync, decrementAsync, incrementByAmount } from "../../slices/counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();
  const [asyncAmount, setAsyncAmount] = useState();

  return (
    <div>
      <div>
        <div>
          <input
            type="number"
            value={asyncAmount}
            onChange={(e) => setAsyncAmount(Number(e.target.value))}
          />
          <button
            aria-label="async add "
            onClick={() => dispatch(incrementAsync(asyncAmount))}
          >
            Асинхронно добавить число
          </button>
          <button
            aria-label="async subtract "
            onClick={() => dispatch(decrementAsync(asyncAmount))}
          >
            Асинхронно убавить число
          </button>
        </div>
        <button
          aria-label="increment value"
          onClick={() => dispatch(increment())}
        >
          Добавить 1
        </button>
        <span>{count}</span>
        <button
          aria-label="decrement value"
          onClick={() => dispatch(decrement())}
        >
          Убавить 1
        </button>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button onClick={() => dispatch(incrementByAmount(amount))}>
            Увеличить на введеное число
          </button>
        </div>
      </div>
    </div>
  )
}
