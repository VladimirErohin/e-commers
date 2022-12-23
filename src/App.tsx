import React from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import Home from "./pages/Home/index";
import FontStyles from "./styles/global"

function App() {

  return (
    <div>
      <FontStyles />
      {/*<Counter/>*/}
      <Home/>
    </div>
  );
}

export default App;
