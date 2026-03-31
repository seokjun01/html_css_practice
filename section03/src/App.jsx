import "./App.css";
import { useState } from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter />
      <Bulb />
    </>
  );
}

export default App;
