import { useTranslation } from "react-i18next";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import projectData from "../../public/data/projects.json";
import Project from "./project";

export default function Projects() {
  const { t } = useTranslation();

  // Sample projects data
  const projects = projectData.projects.map((project) => project);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProject = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length),
    onSwipedRight: () =>
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      ),
  });

  return (
    <div className="box-container">
      <h2 className="title">{t("home.translate-projects")}</h2>
      <div className="project-container" {...swipeHandlers}>
        {projects.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            isOpen={index === activeIndex}
            onToggle={() => toggleProject(index)}
          />
        ))}
      </div>
    </div>
  );
}
