export default function Project() {
    return (
        <div className="project">
            <div className="project__image">
                <img src="https://via.placeholder.com/300x200" alt="Project" />
            </div>
            <div className="project__info">
                <h3>Project Title</h3>
                <p>Project Description</p>
                <p>Project Tech</p>
            </div>
            <div className="project__buttons">
                <button className="button-3">View Project</button>
                <button className="button-4">View Repo</button>
            </div>
        </div>
    )
}