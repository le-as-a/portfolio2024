import React from 'react';
import './projects.css';

function Projects () {
    return (
        <>
            <div className='projects-container'>
                <div className='project'>
                    <img alt="discord" src="discord.png" width="100px" />
                    <p className='proj-title'>Von Peeble</p>
                    <p className='proj-desc'>This is a discord bot written in Python with Discord API. It uses a SQLite 3 backend and performs functions based on the user information stored. More infromation can be found <a href="https://github.com/le-as-a/vonpeeble" rel="noreferrer" target='_blank'>here</a>.</p>
                </div>
            </div>
        </>
    );
}

export default Projects;