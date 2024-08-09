import graphic from '../assets/undraw_developer.svg';

export default function Hero() {
    return(
        <div className="hero">
            <img className="hero__graphic" src={graphic} alt="Clip art of a web developer"></img>
            <h1 className="hero__name">Ozan Sereflioglu</h1>
            <h2 className="hero__title">Full Stack Developer</h2>
            <p className="hero__subtitle">Fueled by a passion for continuous learning and growth.</p>
            <div className="hero__buttons">
                <a href="#projects">
                    <button className="button-1">View Projects</button>
                </a>
                <a href="#contact">
                    <button className="button-2">Contact Me</button>
                </a>
            </div>
        </div>
    )
}