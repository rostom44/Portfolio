import Intro from "../components/home/intro";
import Quote from "../components/home/quote";
import { useTheme } from "../darkTheme/ThemeProvider";

export default function Home() {
  const { darkMode } = useTheme();
  return (
    <div>
      <Intro className={darkMode ? "box-container dark" : "box-container"} />
      <Quote />
    </div>
  );
}
