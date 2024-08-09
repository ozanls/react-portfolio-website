// Skill component
// Used to display a single skill

import { ReactSVG } from 'react-svg';

export default function Skill(props) {
    return (
        <div className="skill">
            <ReactSVG className="skill__icon" src={`/assets/${props.skill.name}.svg`} />
            <p>{props.skill.name}</p>
        </div>
    )
}