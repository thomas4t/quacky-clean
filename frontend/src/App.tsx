import React from "react";
import DuckCounter from "./components/DuckCounter";

function App() {
  const [showDucks, setShowDucks] = React.useState(true);
  return (
    <div className="App">
      <p>The app root!</p>
      {showDucks ? <DuckCounter /> : <span>nothin to see here</span>}
      <button onClick={() => setShowDucks(!showDucks)}>
        Reset duck state!
      </button>
    </div>
  );
}

export default App;
