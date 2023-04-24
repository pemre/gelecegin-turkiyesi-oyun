import { useState } from "react";
import "./App.css";

import { Sami } from "./classes/Sami";

const sami = new Sami();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Happiness: %{sami.getHappiness()}</p>
      </div>
    </>
  );
}

export default App;
