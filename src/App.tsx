import { useState } from "react";
import "./App.css";

import { Government } from "./classes/Government";
import { Sami } from "./classes/Sami";

const gov = new Government("DENEME");
const sami = new Sami();

function App() {
  const [count, setCount] = useState(0);

  const government = { ...gov };

  const ministries = government.ministries.map((m) => (
    <li key={m.name}>
      {m.name}: {m.budget}
      <button
        onClick={() => {
          m.decreaseBudget();
          setCount((count) => count + 1);
        }}
      >
        -
      </button>{" "}
      ||
      <button
        onClick={() => {
          m.increaseBudget();
          m.budget++;
        }}
      >
        +
      </button>
    </li>
  ));

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            government.ministries[0].increaseBudget();
          }}
        >
          DEC is {count}
        </button>
        <p>Happiness: %{sami.getHappiness()}</p>
        <p>Government: {government.type}</p>
        <p>Ministries: 2</p>
        <ol>{ministries}</ol>
      </div>
    </>
  );
}

export default App;
