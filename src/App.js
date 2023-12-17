import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="counter">
        <input className="time" placeholder="HH" />
        :
        <input className="time" placeholder="MM" />
        :
        <input className="time" placeholder="SS" />
      </div>

      <div>
        <button className="submit">START</button>
      </div>
    </div>
  );
}

export default App;
