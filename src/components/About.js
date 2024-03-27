import React from 'react';
import classroomAverageImg from './Assets/classroomaverage.png';
import memeGeneratorImg from './Assets/memegenerator.png';
import taskTrackerImg from './Assets/tasktracker.png';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on. Click the link below to view my GitHub profile and explore my repositories.</p>
      <a href="https://github.com/LB45000" target="_blank" rel="noopener noreferrer">View My GitHub</a>
      
      <h2>Here are some of my notable projects:</h2> 
      
      <div className="project">
        <h3>Classroom Average Calculator</h3>
        <img src={classroomAverageImg} alt="Classroom Average Calculator" className="project-img" />
        <p>This is a react project that allows you to calculate the average grades of students. It provides a user-friendly interface for inputting scores and displays the calculated average promptly.It also allows you to add and delete students.</p>
        <a href="https://github.com/LB45000/ClassRoomAverageReact" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <h3>Meme Generator</h3>
        <img src={memeGeneratorImg} alt="Meme Generator" className="project-img" />
        <p>A fun and interactive web application that generates memes. It uses a meme api and it is also a react project.</p>
        <a href="https://github.com/LB45000/Meme-Generator" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <h3>Task Tracker</h3>
        <img src={taskTrackerImg} alt="Task Tracker" className="project-img" />
        <p>An efficient task management tool to help users organize their daily tasks. It features task addition, editing, and deletion. It is also a react app.</p>
        <a href="https://github.com/LB45000/TaskTracker" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default Projects;

