import "./Card.css";
import { use } from "react";
import { CounterContext } from "../providers/CounterProvider.jsx";

export default function NestedDisplay() {
  const { count } = use(CounterContext);
  return (
    <div className="card-orange">
      <h1>Nested Display: {count}</h1>
    </div>
  );
}
