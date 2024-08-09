// Navbar component

import scrollToSection from './scrollToSection';

export default function Navbar() {

    return (
        <nav>
            <a onClick={() => scrollToSection('hero')}><p className="nav__logo">sereflioglu.com</p></a>
            <ul className="nav__links">
                <a onClick={() => scrollToSection('about')}><li>About Me</li></a>
                <a onClick={() => scrollToSection('projects')}><li>Projects</li></a>
                <a onClick={() => scrollToSection('skills')}><li>Skills</li></a>
                <a onClick={() => scrollToSection('contact')}><li>Contact</li></a>
            </ul>
        </nav>
    );
}