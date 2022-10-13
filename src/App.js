import logo from "./dictionary-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          React Dictionary App Coded by Felicia on{" "}
          <a
            href="https://github.com/felicka/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

//https://dreamy-kelpie-297625.netlify.app/
