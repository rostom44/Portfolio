import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

function Project({ project, isOpen, onToggle }) {
  const { t } = useTranslation();

  const expandAnimation = useSpring({
    height: isOpen ? "auto" : "0px",
    opacity: isOpen ? 1 : 0,
    overflow: "hidden",
  });

  return (
    <div className="project" onClick={onToggle}>
      <img src={project.img} alt={project.alt} />
      <h3>{project.title}</h3>
      <animated.div style={expandAnimation} className="project-content">
        <p>{t(project.description)}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button></button>
        </a>
      </animated.div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Project;
