import "./App.css";
import { Link, Route } from "wouter";
// Link es para hacer enlaces que funcionen con el history.push()
// sin refrescar la página
// actualiza el enlace, el Route hará match
// y cambiará el componente a renderizar

import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import GifInfo from "./components/GifInfo/GifInfo";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/ferrari"> Gif de ferraris </Link>
        <Link to="/gif/jeep"> Gif de jeep </Link>
        <Link to="/gif/subaru"> Gif de subaru </Link>

        <Route path="/gif/:keyword" component={ListOfGifs} />
        <Route path="/gifinfo/:id" component={GifInfo} />
      </section>
    </div>
  );
}

export default App;
