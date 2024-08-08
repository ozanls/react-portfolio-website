import graphic from '../assets/graphic.svg';

export default function Hero() {
    return(
        <div className="hero">
            <div className="hero__left">
                <img className="hero__left__graphic" src={graphic}></img>
            </div>
            <div className="hero__right">
                <p className="hero__right__title">Junior Web Developer</p>
                <p className="hero__right__name">Ozan Sereflioglu</p>
                <p className="hero__right__subtitle">Driven by a passion for creating unique digital experiences.</p>
                <div className="hero__right__buttons">
                    <button className="button-1">View Projects</button>
                    <button className="button-2">Contact Me</button>
                </div>
            </div>
        </div>
    )
}