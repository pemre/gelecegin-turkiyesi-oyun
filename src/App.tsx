import { useState } from "react";
import "./App.css";
import { Game } from "./classes/Game";

const game = new Game();

function App() {
  const [turn, setTurn] = useState(0);

  const ministries = game.government.ministries.map((m) => (
    <li key={m.name}>
      {m.name}: {m.budget}
      <button onClick={() => m.decreaseBudget()}>-</button>|
      <button onClick={() => m.increaseBudget()}>+</button>
    </li>
  ));

  return (
    <>
      <div className="card">
        <button onClick={() => setTurn((turn) => turn + 1)}>
          --TURN: {turn} emre
        </button>
        <p>Happiness: %{game.person.getHappiness()}</p>
        <p>Government: {game.government.type}</p>
        <p>Ministries</p>
        <ol>{ministries}</ol>
      </div>
      {/* <pre>{i18n.toString()}</pre> */}
      ----------
      {/* <pre>{promises.JUSTICE}</pre> */}
    </>
  );
}

export default App;
