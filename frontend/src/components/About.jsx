export default function About () {
    return(
        <>
        <div className="container-title">
            <h2>About Me</h2>
            <p>Who is Ozan Sereflioglu?</p>
            <hr></hr>
        </div>
            <div className="about">
                <div className="about__left">
                    <img src="../assets/about.svg"></img>
                </div>
                <div className="about__right">
                    <p className="about__right__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="about__right__buttons">
                        <button className="button-1">View Projects</button>
                    </div>
                </div>
            </div>
        </>
    )
}