import './Header.css'
import mail from './mail.png'
import github from './githubwhite.png'
import linkedin from './linkedin.png'

export default function Header() {
    return (
        <div className="header">
            <div className='header-text'>
                <h1>Hello, I'm <span>WENDY ZHU</span>!</h1>
                <h1>A full-stack <span>software engineer</span> based in <span>Melbourne</span>.</h1> 
                <h1>I love building things and being creative.</h1>
            </div>
            <div>
                <a href="mailto:wendyy.zhu@hotmail.com"><img src={mail} alt="" /></a>
                <a href="https://github.com/wendyyzhu" target="_blank"><img src={github} alt="" /></a>
                <a href="https://linkedin.com/in/wendyy-zhu" target="_blank"><img src={linkedin} alt="" /></a>
            </div>
            <div class="custom-shape-divider-bottom-1692314172">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}