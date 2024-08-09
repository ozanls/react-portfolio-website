// Project component
// Used to display a single project

export default function Project(props) {
    return (
      <div className="project">
        <img
          className="project__image"
          src={`/assets/${props.project.name}.jpeg`}
          alt={`${props.project.name} preview image`}
        />
        <div className="project__info">
          <h3 className="project__info__title">{props.project.name}</h3>
          <p className="project__info__description">
            {props.project.description}
          </p>
          <p className="project__info__tech">{props.project.tech.join(", ")}</p>
          <div className="project__buttons">
            <a href={props.project.links[0]}>
              <button className="button-3">View Project</button>
            </a>
            <a href={props.project.links[1]}>
              <button className="button-4">View Repo</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  