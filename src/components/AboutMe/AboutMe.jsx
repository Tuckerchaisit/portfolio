import "./aboutMe.scss"

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="abtm-title-ctn">  
      <h1>About</h1>
      <h1 className="me-text">Me</h1>
      </div>
      <p className="aboutme-info">    I am a <span>well-rounded</span>, <span>highly-motivated </span>software engineer with a background in electrical engineering. The real-world engineering experience has helped me shape a strong foundation in <span>logical and critical thinking</span> as well as <span>collaboration skills</span> within a team. I am <span>passionate</span> about innovation, new techonology, always <span>excited to learn new things</span>, and <span>enjoy solving challenging and complex problems</span> that have a positive impact on the individual, society, and the world.</p>
      <h2>Skills</h2>
      <hr />
      <div className="skills-container-1">
        <div className="skill-detail">Javascript</div>
        <div className="skill-detail">Python</div>
        <div className="skill-detail">HTML</div>
        <div className="skill-detail">CSS</div>
        <div className="skill-detail">SQL</div>
      </div>
      <div className="skills-container-2">
        <div className="skill-detail">Mongoose</div>
        <div className="skill-detail">MongoDB</div>
        <div className="skill-detail">Express</div>
        <div className="skill-detail">React</div>
        <div className="skill-detail">Node.js</div>
      </div>
      <div className="skills-container-2">
        <div className="skill-detail">Agile/Scrum</div>
        <div className="skill-detail">Bootstrap</div>
        <div className="skill-detail">Sass</div>
        <div className="skill-detail">EJS</div>
        <div className="skill-detail">PostgreSQL</div>
      </div>

    </div>
  )
}
