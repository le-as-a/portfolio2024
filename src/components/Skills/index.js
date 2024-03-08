import React from 'react';
import './skills.css';

function Skills () {
    return (
        <>
            <div className='skills-container'>
                <div className='skill'>
                    <img alt='react' src="skills/react.png" width="75px" />
                    <p>React</p>
                </div>
                <div className='skill'>
                    <img alt='js' src="skills/javascript.png" width="75px" />
                    <p>Javascript</p>
                </div>
                <div className='skill'>
                    <img alt='py' src="skills/py.png" width="75px" />
                    <p>Python</p>
                </div>
                <div className='skill'>
                    <img alt='sql' src="skills/sql.png" width="75px" />
                    <p>SQL</p>
                </div>
                <div className='skill'>
                    <img alt='postgres' src="skills/postgre.png" width="75px" />
                    <p>Postgres</p>
                </div>
                <div className='skill'>
                    <img alt='html/css' src="skills/htmlcss.png" width="75px" />
                    <p>HTML/CSS</p>
                </div>
                <div className='skill'>
                    <img alt='node' src="skills/nodejs.png" width="75px" />
                    <p>Node.js</p>
                </div>
                <div className='skill'>
                    <img alt='git' src="skills/git.png" width="75px" />
                    <p>Git</p>
                </div>
                <div className='skill'>
                    <img alt='ts' src="skills/ts.png" width="75px" />
                    <p>Typescript</p>
                </div>
                <div className='skill'>
                    <img alt='docker' src="skills/docker.png" width="75px" />
                    <p>Docker</p>
                </div>
            </div>
            <div className='skill-footer'>
                Icons found on <a href="https://www.flaticon.com/">Flaticon</a>.
            </div>
        </>
    )
}

export default Skills;