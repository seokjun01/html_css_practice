import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
