import { useState, useEffect } from 'react';
import Skill from './Skill';

export default function Skills () {
    const [skills, setSkills] = useState(null);
    const url = import.meta.env.VITE_API_URL || `http://localhost:5050`;

// Fetch skills from the database
useEffect(() => {
    async function fetchSkills() {
    const response = await fetch(`${url}/skills`);
    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
    }
      const skills = await response.json();
      setSkills(skills);
      console.log(skills);
    }
    fetchSkills();
    return;
  }, []);

    return(
        <section id="skills">
            <div className="section-title">
                <h2>Skills</h2>
                <p>Learn more about my technical proficiency.</p>
                <hr></hr>
            </div>
            {!skills && <div class="loader"></div> }
            {skills && (
                <div className="skills">
                    {skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            )}
        </section>
    )
}