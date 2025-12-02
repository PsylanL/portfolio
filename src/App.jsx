import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import React from "react";
import gsap from "gsap";
import { Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
};

export default App;
