import React from "react";
import TopNavigation from "./components/TopNavigation";
import Welcome from "./components/welcome/welcome";
import Storypage from "./components/Storypage/storypage";
import Projects from "./components/projects/projects";
import Sidebar from "./components/Sidebar/sidebar";
import ContactMe from "./components/ContactMe/ContactMe";
function App() {
  return (
    <div className="flex flex-col snap-mandatory snap-y">
      <Sidebar/>
      <TopNavigation/>
      <Welcome/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
