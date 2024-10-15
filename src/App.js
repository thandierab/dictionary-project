import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="thandie-logo">
          <div>THANDIE</div>
          <div>R-MANE</div>
        </div>
        <main>
          <Dictionary />
        </main>
      </header>
      <footer className="App-footer">
        <a
          href="https://github.com/thandierab/dictionary-project"
          title="github link"
        >
          Coded
        </a>{" "}
        by Thandie R-mane
      </footer>
    </div>
  );
}
