import Intro from "../components/home/intro";
import Quote from "../components/home/quote";
import Github from "../components/home/github";
import Linkdin from "../components/home/linkedin";
import Skills from "../components/home/skills";
import { useTheme } from "../darkTheme/ThemeProvider";
export default function Home() {
  const { darkMode } = useTheme();
  return (
    <div>
      <div className="homeHeader">
        <Intro className={darkMode ? "box-container dark" : "box-container"} />
        <Github />
        <Linkdin />
      </div>
      <Skills className />
      <Quote />
    </div>
  );
}
