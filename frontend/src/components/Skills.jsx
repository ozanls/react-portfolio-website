import Skill from './Skill';

export default function Skills () {
    return(
        <div className="container">
            <div className="container-title">
                <h2>Skills</h2>
                <p>Learn more about my technical proficiency.</p>
                <hr></hr>
            </div>
                <div className="skills">
                    <Skill />
                </div>
        </div>
    )
}