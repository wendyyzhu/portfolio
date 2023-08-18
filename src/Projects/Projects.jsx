import './Projects.css'
import wenandco from './wenandco.png'
import burgulator from './burgulator.png'
import servoApp from './servo-app.png'
import fineLine from './fine-line.png'
import js from "./js.png"
import css from "./css.png"
import html from "./html.png"
import node from "./node.png"
import express from "./express.png"
import git from "./git.png"
import mongo from "./mongodb.png"
import psql from "./psql.png"
import github from "./github.png"
import react from "./react.png"

export default function Projects() {
    return (
        <div className='projects-section' id="projects">
            <div className="projects">
                <div>
                    <a href="https://wenandco.onrender.com/" target="_blank"><img className="project-img" src={wenandco} alt="" /></a>
                </div>
                <div>
                    <h2>Wen & Co</h2>
                    <h3>Final project at General Assembly</h3>
                    <ul>
                        <li><h4>Recreated an online shop I used to run</h4></li>
                        <li><h4>Built a full-stack application using the MERN stack</h4></li>
                        <li><h4>Has full CRUD data operations and implementation of token-based authentication</h4></li>
                        <li><h4>Communication between the React front-end with the Express back-end via AJAX</h4></li>
                        <li><h4>Integration of Stripe payment API</h4></li>
                    </ul>
                    <h4>Deployed site: <a href="https://wenandco.onrender.com" target="_blank">wenandco.onrender.com</a></h4>
                    <h4>GitHub: <a href="https://github.com/wendyyzhu/wenandco">github.com/wendyyzhu/wenandco</a></h4>
                    <h4>Technologies used:</h4>
                    <div className="tech">
                        <img className="tech-img" src={react} alt="react" />
                        <img className="tech-img" src={js} alt="javascript" />
                        <img className="tech-img" src={html} alt="html" />
                        <img className="tech-img" src={express} alt="express" />
                        <img className="tech-img" src={mongo} alt="mongo db" />
                        <img className="tech-img" src={github} alt="github" />
                        <img className="tech-img" src={git} alt="git" />
                    </div>
                </div>
                <div>
                    <a href="https://wendyyzhu.github.io/burgulator/" target="_blank"><img className="project-img" src={burgulator} alt="" /></a>
                </div>
                <div>
                    <h2>Burgulator</h2>
                    <h3>First React App</h3>
                    <h4>Fun, response app to build your own burger!</h4>
                    <h4>Deployed site: <a href="https://github.com/wendyyzhu/burgulator" target="_blank">github.com/wendyyzhu/burgulator</a></h4>
                    <h4>GitHub: <a href="https://github.com/wendyyzhu/burgulator">github.com/wendyyzhu/burgulator</a></h4>
                    <h4>Technologies used:</h4>
                    <div className="tech">
                        <img className="tech-img" src={react} alt="react" />
                        <img className="tech-img" src={js} alt="javascript" />
                        <img className="tech-img" src={html} alt="html" />
                        <img className="tech-img" src={github} alt="github" />
                        <img className="tech-img" src={git} alt="git" />
                    </div>
                </div>
                <div>
                    <a href="https://github.com/wendyyzhu/servo_app" target="_blank"><img className="project-img" src={servoApp} alt="" /></a>
                </div>
                <div>
                    <h2>Servo App</h2>
                    <h3>First group project</h3>
                    <ul>
                        <li><h4>A single page application to allow the user to see service stations in their area and around Australia using Google Map's API</h4></li>
                        <li><h4>Created our own REST JSON API of petrol stations</h4></li>
                        <li><h4>Used Trello, Slack and Zoom as collaboration tools to ensure effective communication across the team</h4></li>
                        <li><h4>Currently not deployed</h4></li>
                    </ul>
                    <h4>GitHub: <a href="https://github.com/wendyyzhu/servo_app">github.com/wendyyzhu/servo_app</a></h4>
                    <h4>Technologies used:</h4>
                    <div className="tech">
                        <img className="tech-img" src={js} alt="javascript" />
                        <img className="tech-img" src={html} alt="html" />
                        <img className="tech-img" src={express} alt="express" />
                        <img className="tech-img" src={psql} alt="psql" />
                        <img className="tech-img" src={github} alt="github" />
                        <img className="tech-img" src={git} alt="git" />
                    </div>
                </div>
                <div>
                    <a href="https://fine-line-tatouage.onrender.com/" target="_blank"><img className="project-img" src={fineLine} alt="" /></a>
                </div>
                <div>
                    <h2>Fine Line Tatouage</h2>
                    <h3>First full-stack application</h3>
                    <ul>
                        <li><h4>A tattoo-sharing platform for users to find inspiration for their next tattoo</h4></li>
                        <li><h4>Password-protected via session authentication</h4></li>
                        <li><h4>Full-stack CRUD data operations</h4></li>
                    </ul>
                    <h4>Deployed site: <a href="https://fine-line-tatouage.onrender.com" target="_blank">fine-line-tatouage.onrender.com</a></h4>
                    <h4>GitHub: <a href="https://github.com/wendyyzhu/fine-line-tatouage">github.com/wendyyzhu/fine-line-tatouage</a></h4>
                    <h4>Technologies used:</h4>
                    <div className="tech">
                        <img className="tech-img" src={js} alt="javascript" />
                        <img className="tech-img" src={html} alt="html" />
                        <img className="tech-img" src={express} alt="express" />
                        <img className="tech-img" src={psql} alt="psql" />
                        <img className="tech-img" src={github} alt="github" />
                        <img className="tech-img" src={git} alt="git" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}