// 1. File extension must be .jsx
// 2. component name must start with capital letter
// 3. There must be a default export / export
// 4. There must be a single root return

// const TestComponent = () => {
//     return (
//     <div>
//             <h1>Test Component</h1>
//         </div>
//     );
// };

// export default TestComponent;

// Using div
// export default function TestComponent() {
//   return (
//     <div>
//         <h1>Hello World</h1> <p>This is a paragraph</p>
//         <span>I am from Bangladesh</span>
//     </div>
//   )
// }

// Using React Fragment


export default function TestComponent() {
  return (
    <>
      <div>
        <h1>Hello World</h1> <p>My Name is {name}</p>
        <span>I am from Bangladesh</span>
      </div>
      <div>
        <h1>Programming Hero</h1>
      </div>
    </>
  );
}
