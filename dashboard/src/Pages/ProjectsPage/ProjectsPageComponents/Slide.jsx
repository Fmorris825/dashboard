import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slide = ({ project, setSelectedProject }) => {
  const handleSelect = () => {
    setSelectedProject(project);
  };
  return (
    <SwiperSlide onClick={handleSelect}>
      <img className="slideImg" src={project.thumbnail_Url} />
    </SwiperSlide>
  );
};

export default Slide;
