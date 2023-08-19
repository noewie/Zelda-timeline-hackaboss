import "./App.css";
import { Timeline } from "./components/Timeline/TimeLine";
import zeldaGames from "./data/zeldaGames.json";

function App() {
  console.log(zeldaGames);
  return (
    <div className="App">
      <header>
        <h1 className="goldText">Zelda Timeline</h1>
      </header>
      <main>
        <Timeline data={zeldaGames} />
      </main>
      <footer>
        <p>Noelia Rodríguez - HACK A BOSS 2023©</p>
      </footer>
    </div>
  );
}

export default App;
