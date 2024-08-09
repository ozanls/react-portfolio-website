import { useEffect, useState } from 'react';
import Project from './Project';
import { Navigation, A11y, Keyboard} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

export default function Projects () {

    const [projects, setProjects] = useState([]);
    
// Fetch projects from the database
    useEffect(() => {
        async function fetchProjects() {
          const response = await fetch(`http://localhost:5050/projects/`);
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return;
          }
          const projects = await response.json();
          setProjects(projects);
          console.log(projects);
        }
        fetchProjects();
        return;
      }, []);

// Output components
    return(
        <section id="projects">
            <div className="section-title">
                <h2>Projects</h2>
                <p>A collection of my best work.</p>
                <hr></hr>
            </div>
            <div className="projects">
                <Swiper
                modules={[Navigation, A11y, Keyboard]}
                className="projects__swiper"
                slidesPerView={3}
                loop={true}
                spaceBetween={'30px'}
                keyboard={{
                    enabled: true,
                  }}
                navigation={
                    {
                        nextEl: '.projects__navigation__right',
                        prevEl: '.projects__navigation__left'
                    }
                }
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}><Project project={project} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="projects__navigation">
                <button className="projects__navigation__left button-6"><FontAwesomeIcon icon={faCaretLeft} /></button>
                <button className="projects__navigation__right button-6"><FontAwesomeIcon icon={faCaretRight} /></button>
            </div>
        </section>
    )
}