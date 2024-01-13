import { useState } from 'react';
import './css/about.css';

function About() {
    return (
        <div id="about" className="about-me-container">

            <h3>About Me</h3>

            <div className="about-me-text-photo-wrapper">

                <div className="about-me-text">
                    <p>
                        I'm currently pursuing a Bachelor's Degree full-time at <a href="https://www.oregonstate.edu/">Oregon State University</a>, 
                        majoring in Computer Science with a focus on Web and Mobile Development.
                    </p>
                    <p>
                        I was a medic in the Army when I started taking online classes, one of which was an introductory Computer Science course. 
                        I had never coded before, but I found the problem-solving aspect of it to be fun and rewarding. I decided to pursue
                        my degree full-time after my enlistment was over, and I'm now in my junior year of school.
                    </p>
                    <p>
                        I've had a chance to delve into both front and back-end development through internships, coursework, and personal projects, and I really enjoy working with both.
                        In addition to my projects showcased below, I currently work as a Software Engineer Intern at OSU's Sustainability Office. 
                        You can check out my contributions to the <a href="https://dashboard.sustainability.oregonstate.edu/#/map" >OSU Energy Dashboard</a> and other
                        projects <a href="https://github.com/OSU-Sustainability-Office">here</a>.
                    </p>
                </div>
                
                <div className="img-links-wrapper">
                    <img className="portrait" src="https://media.licdn.com/dms/image/D5603AQEK0sDWUXkywQ/profile-displayphoto-shrink_200_200/0/1668541275489?e=1709769600&v=beta&t=dCXvBm2forOGSa753d-LbkUmbZlhK1CHp0CaDgtOhus" alt="Samantha Egge" />
                    <div className="links">
                        <a href="https://github.com/s-egge">
                            <img src="src\assets\github-mark-white.png" alt="Github logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/samantha-s-egge/">
                            <img src="src\assets\LI-In-Bug.png" alt="LinkedIn logo"/>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;