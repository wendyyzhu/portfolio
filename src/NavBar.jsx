import './NavBar.css'
import resume from './Resume.pdf'

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
        </nav>
    )
}