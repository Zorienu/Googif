import "./App.css";
import { useState } from "react";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("ferrari");

  return (
    <div className="App">
      <section className="App-content">
        <input type="text" onChange={(e) => setKeyword(e.target.value)} />
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
