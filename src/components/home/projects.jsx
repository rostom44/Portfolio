import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import projectData from "../../public/data/projects.json";
import Project from "./project";
import { IoLogoGithub } from "react-icons/io5";

export default function Projects() {
  const { t } = useTranslation();
  const projects = projectData.projects;

  // State to manage which project is expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Optional: Track Swiper's active slide
  const [, setSwiperActiveIndex] = useState(0);

  const toggleProject = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="box-container">
      <h2 className="title">{t("home.translate-projects")}</h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop
        spaceBetween={16}
        slidesPerView="auto"
        onSlideChange={(swiper) => setSwiperActiveIndex(swiper.realIndex)} // Optional: Update Swiper active slide index
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className="project">
            <Project
              project={project}
              isOpen={index === activeIndex}
              onToggle={() => toggleProject(index)} // Toggle expanded view
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Expanded Content Below Carousel */}
      {activeIndex !== null && (
        <div className="expanded-content">
          <h3>{projects[activeIndex].title}</h3>
          <p>{t(projects[activeIndex].description)}</p>
          <a
            href={projects[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <IoLogoGithub />
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
