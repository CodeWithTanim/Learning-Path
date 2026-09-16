// import TestComponent from "./TestComponent";

import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";

// const name = 'Tanim'

// const App = () => {
//   return (
//     <div>
//       {/* <TestComponent /> */}
//       <Card firstName="Samiur" lastName="Rahman" age={24}>
//         <h1>Welcome</h1>
//         <p>Hello World</p>
//       </Card>
//     </div>
//   );
// };

const members = [
  { name: "Samiur", age: 15 },
  { name: "Tanim", age: 24 },
  { name: "Rahman", age: 28 },
  { name: "Hasan", age: 27 },
];

// const App = () => {
//   return (
//     <div>
//       {/* <TestComponent /> */}
//       <Card name='Samiur' age={25} />
//       <Card name='Tanim' age={24} />
//       <Card name='Rahman' age={28} />
//       <Card name='Hasan' age={27} />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       {/* <TestComponent /> */}
//       <Card name={members[0].name} age={members[0].age} />
//       <Card name={members[1].name} age={members[1].age} />
//       <Card name={members[2].name} age={members[2].age} />
//       <Card name={members[3].name} age={members[3].age} />
//     </div>
//   );
// };

const App = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {/* {members
        .filter((member) => member.age > 18)
        .sort((a, b) => a.age - b.age)
        .map((member) => (
          <Card name={member.name} age={member.age} />
        ))} */}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
