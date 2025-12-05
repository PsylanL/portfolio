import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import React from "react";
import gsap from "gsap";
import { Safari, Terminal, Resume } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;
