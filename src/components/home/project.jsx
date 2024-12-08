import PropTypes from "prop-types";

function Project({ project, onToggle }) {
  return (
    <div className="project" onClick={onToggle} role="button" tabIndex="0">
      <div className="project-img-container">
        <img className="project-img" src={project.img} alt={project.alt} />
      </div>
      <h3>{project.title}</h3>
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
