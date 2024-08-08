import Project from './Project';

export default function Projects () {
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