// scrollToSection function
// Used to scroll to a section on the page. 

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

export default scrollToSection;