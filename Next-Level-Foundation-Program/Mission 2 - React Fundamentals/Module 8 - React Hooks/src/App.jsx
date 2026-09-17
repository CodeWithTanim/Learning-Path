// import { useEffect, useState } from "react";

import DisplayUsers from "./components/DisplayUsers";

function App() {
  // const [count, setCount] = useState(0);
  // const [anotherCount, setAnotherCount] = useState(0);

  {
    /* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
  }

  // useEffect(() => {
  // console.log("Use Effect");
  // }, [count, anotherCount]);
  // }, [count]);

  {
    /* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
  }

  // const [second, setSecond] = useState(0);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setSecond((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(timerId);
  // }, []);

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>Increment ({count})</button>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>
        Increment Another ({anotherCount})
      </button> */}

      {/* <h1>{second}</h1> */}

      {/* *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */}

      <DisplayUsers/>
    </>
  );
}

export default App;
