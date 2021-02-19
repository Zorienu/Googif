import "./App.css";
import { GifsContextProvider } from "./context/GifContext";
import { Route } from "wouter";
// Link es para hacer enlaces que funcionen con el history.push()
// sin refrescar la página
// actualiza el enlace, el Route hará match
// y cambiará el componente a renderizar

import SearchResults from "./pages/SearchResults";
import Details from "./pages/Details";
import Home from "./pages/Home/Home";
import Logo from "./components/Logo/Logo";
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Logo />
        <GifsContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gifinfo/:id" component={Details} />
          <Route path="/404" component={ErrorPage} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
