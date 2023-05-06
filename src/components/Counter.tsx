import { useState } from "react"
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <button className={classes.button} onClick={increment}>increment</button>
      <span>{ count }</span>
      <button className={classes.button} onClick={decrement}>decrement</button>
    </div>
  )
}