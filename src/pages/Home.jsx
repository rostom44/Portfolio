import Intro from "../components/home/intro";
import Quote from "../components/home/quote";
import Github from "../components/home/github";
import Linkdin from "../components/home/linkedin";
import Skills from "../components/home/skills";
import Projects from "../components/home/projects";

import { useTheme } from "../context/ThemeProvider";
export default function Home() {
  const { darkMode } = useTheme();
  return (
    <div className="homeBody">
      <div className="homeHeader">
        <Intro className={darkMode ? "box-container dark" : "box-container"} />
        <Github />
        <Linkdin />
      </div>
      <div className="homeMain">
        <Skills className />
        <Quote />
        <Projects />
      </div>
    </div>
  );
}
