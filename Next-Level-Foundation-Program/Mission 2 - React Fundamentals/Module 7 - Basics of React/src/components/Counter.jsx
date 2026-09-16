import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleIncrementByValue = (value) => {
        setCount(count + value)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    // Handle Decrement greater than 0
    const handleGreaterZeroDecremet = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => handleIncrementByValue(5)}>Increment by 5</button>
        {count}
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleGreaterZeroDecremet}>Decrement Greater Than 0</button>
    </div>
  )
}
