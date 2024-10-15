import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="/books.png" alt="Books Logo" className="books" />
          <div className="dictionary-logo">
            <div>ENGLISH DICTIONARY</div>
          </div>
        </div>
        <main>
          <Dictionary defaultKeyword="tiger" />
        </main>
      </header>
      <footer className="App-footer">
        <a
          href="https://github.com/thandierab/dictionary-project"
          title="github link"
          className="author"
        >
          Coded
        </a>{" "}
        by Thandie R-mane.
      </footer>
    </div>
  );
}
