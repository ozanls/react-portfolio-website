export default function Skill(props) {
    return (
        <div className="skill">
            <img className="skill__icon" src={props.skill.icon}/>
            <p>{props.skill.name}</p>
        </div>
    )
}