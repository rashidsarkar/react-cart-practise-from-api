import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Prodacts from "./Components/Prodacts/Prodacts";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Prodacts></Prodacts>
    </>
  );
}

export default App;
