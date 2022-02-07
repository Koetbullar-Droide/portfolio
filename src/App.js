import React from "react";
import TopNavigation from "./components/TopNavigation";
import Welcome from "./components/welcome/welcome";
import Storypage from "./components/Storypage/storypage";
import Projects from "./components/projects/projects";
function App() {
  return (
    <div className="flex flex-col snap-mandatory snap-y">
      <TopNavigation/>
      <Welcome/>
      <Projects/>
    </div>
  );
}

export default App;
