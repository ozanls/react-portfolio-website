export default function Navbar () {
    return (
        <>
        <nav>
            <a href="#"><p className="nav__logo">sereflioglu.com</p></a>
            <ul className="nav__links">
                <a href="#about"><li>About Me</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
        </>
    )
}