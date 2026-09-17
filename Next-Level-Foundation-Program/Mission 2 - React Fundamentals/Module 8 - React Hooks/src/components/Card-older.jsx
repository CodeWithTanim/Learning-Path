// 1. Must use in component top level
// 2. Must use inside react component

import { useState } from "react";
import "./Card.css";

// export default function Card(props) {
//     console.log(props)
//   return (
//     <div>
//         {props.children}
//       <p>First Name: {props.firstName}</p>
//       <p>Last Name: {props.lastName}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// export default function Card({children, firstName, lastName, age}) {
//   return (
//     <div>
//         {children}
//       <p>First Name: {firstName}</p>
//       <p>Last Name: {lastName}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// export default function Card({name, age}) {

//   if (age < 18) {
//     return <div className="card">You are too Young</div>
//   }

//   return (
//     <div className="card">
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// export default function Card({ name, age }) {
//   return (
//     <>
//       {age > 18 && (
//         <div className="card">
//           <p>Name: {name}</p>
//           <p>Age: {age}</p>
//         </div>
//       )}
//       {age < 18 && <div className="card">You are too Young</div>}
//     </>
//   );
// }

// export default function Card({ name, age }) {
//   return (
//     <>
//       {age > 18 ? (
//         <div className="card">
//           <p>Name: {name}</p>
//           <p>Age: {age}</p>
//         </div>
//       ) : (
//         <div className="card">You are too Young</div>
//       )}
//     </>
//   );
// }

export default function Card({ name, age }) {
  const [member, setMember] = useState("");

  const clickHandler = (memberName) => {
    // console.log(`Greetings ${memberName}`);
    setMember(memberName);
  };
  console.log(member);


  //   const anotherClickHandler = () => {
  //     console.log(`Another Greetings`)
  //   }

  //   const greetings = (name) => {
  //     clickHandler(name)
  //     anotherClickHandler()
  //   }

  //   return (
  //     <>
  //       <div onClick={() => greetings(name)} className="card">
  //         <p>Name: {name}</p>
  //         <p>Age: {age}</p>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div onClick={() => clickHandler(name)} className="card">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        {member && <p>Greetings: {member}</p>}
      </div>
    </>
  );
}
