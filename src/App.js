import logo from "./logo-small.jpg";
import "./App.css";
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container"></div>
  <header className="App-header">
  <img src={logo} className="App-logo img-fluid"
  alt="logo"/>
  </header>
  <main>
    <Dictionary defaultKeyword="word"/>
  </main>
  <footer classNeme="App-footer">
    Coded by Kateryna Vanina
    </footer>
    </div>
  );
}

export default App;