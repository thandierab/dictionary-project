import "./App.css";
import Dictionary from "./Dictionary";

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
          <button className="btn btn-primary btn-lg">Large Button</button>
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
