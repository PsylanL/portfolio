import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import React from "react";
import gsap from "gsap";
import { Safari, Terminal, Resume, Finder, Text } from "#windows";

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
      <Finder />
      <Text />
    </main>
  );
};

export default App;
