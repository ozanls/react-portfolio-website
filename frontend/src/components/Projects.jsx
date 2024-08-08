import { useEffect, useState } from 'react';
import Project from './Project';

export default function Projects () {

    const [projects, setProjects] = useState([]);

// Fetch projects from the database
    useEffect(() => {
        async function getProjects() {
          const response = await fetch(`http://localhost:5050/projects/`);
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return;
          }
          const projects = await response.json();
          setProjects(projects);
        }
        getProjects();
        return;
      }, [projects.length]);
      console.log(projects);

// Output components
    return(
        <div className="container">
            <div className="container-title">
                <h2>Projects</h2>
                <p>A collection of my best work.</p>
                <hr></hr>
            </div>
                <div className="projects">
                    <Project />
                </div>
        </div>
    )
}