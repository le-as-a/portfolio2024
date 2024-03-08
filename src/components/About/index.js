import React from 'react';
import './about.css';

function About () {
    return (
        <>
            <div className='about'>
                <img src='work-pfp.png' alt='pfp' /><br />
                My name is Asia and I have a passion for software development, style and world building. 
                Most of my early career was spent managing staff and customers at an Escape Room; I even had dreams of having my own Escape Room business one day! 
                When COVID happened, I shifted goals and started a full-stack software engineer bootcamp program and graduated in 2022. <br /><br />
                Since then, I've been expanding my skills and working on things I'm passionate on. Coding has been my platform for creativity the same way an artist 
                has their pencils or a sculptor their clay. I love creating new things to help or entertain people!
                <div className='contact'>
                    <a href="https://www.linkedin.com/in/asiaanhle/" rel="noreferrer" target="_blank">
                        <img alt="linkedin" src="linkedin.png" width="50px" />
                    </a>
                    <a href="https://github.com/le-as-a" rel="noreferrer" target="_blank">
                        <img alt="github" src="github.png" width="50px" />
                    </a>
                    <a href="Resume.docx" rel="noreferrer" target="_blank">
                        <img alt="resume" src="cv.png" width="50px" />
                    </a>
                </div>
            </div>
        </>
    )
};

export default About;