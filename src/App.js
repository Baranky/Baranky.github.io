import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import ResumeComponent from "./components/ResumeComponent/ResumeComponent";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function App() {
  return (
    <div>
      <SidebarMenu />
      <LandingPageComponent />
      <ResumeComponent />
    </div>
  );
}

export default App;
