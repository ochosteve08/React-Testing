import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(20);
  const handleClick = () => {
    console.log("add");
    setAge((previous)=> previous +1);
  };

  return (
    <div>
      <div data-testid="count" className="App">
        age: {age}
      </div>
      <button className="btn" type="submit" onClick={handleClick}>
        increment
      </button>
    </div>
  );
}

export default App;
