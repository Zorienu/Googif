import "./App.css";
import { Route } from "wouter";
// Link es para hacer enlaces que funcionen con el history.push()
// sin refrescar la página
// actualiza el enlace, el Route hará match
// y cambiará el componente a renderizar

import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";
import Home from "./pages/Home/Home";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Logo />
        <Route path="/" exact component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gifinfo/:id" component={Details} />
      </section>
    </div>
  );
}

export default App;
