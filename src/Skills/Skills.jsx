import "./Skills.css"
import js from "./js.png"
import css from "./css.png"
import html from "./html.png"
import node from "./node.png"
import express from "./express.png"
import git from "./git.png"
import mongo from "./mongodb.png"
import psql from "./psql.png"
import githubwhite from "./githubwhite.png"
import react from "./react.png"

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div class="custom-shape-divider-top-1692314515">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="skills-wrapper">
                <div className="img-container">
                    <img className="image" src={js} alt="javascript" />
                    <div className="middle">
                        <div className="text">JS</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={css} alt="css" />
                    <div className="middle">
                        <div className="text">CSS</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={html} alt="html" />
                    <div className="middle">
                        <div className="text">HTML</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={react} alt="node" />
                    <div className="middle">
                        <div className="text">React</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={node} alt="node" />
                    <div className="middle">
                        <div className="text">Node JS</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={express} alt="express" /> 
                    <div className="middle">
                        <div className="text">Express JS</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={githubwhite} alt="github" />
                    <div className="middle">
                        <div className="text">GitHub</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={git} alt="git" />
                    <div className="middle">
                        <div className="text">Git</div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="image" src={mongo} alt="mongo" />
                    <div className="middle">
                        <div className="text">Mongo DB</div>
                    </div>
                </div>
                < div className="img-container">
                    <img className="image" src={psql} alt="psql" />
                    <div className="middle">
                        <div className="text">PSQL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}