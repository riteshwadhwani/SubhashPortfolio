import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  return (
    <div id="skills" className="container skills-container ">

    <div className="skill-container-left">
      <h2 className="skill-heading">
        <span className="caps">M</span>e and
        <br />
        MyTech Stack
      </h2>

      <div className="skill-subHeading">
        <p>
        My name is Subhash Baviskar and I am a developer. 
         Worked on JavaScript frameworks like react and Database management with MySql and MongoDB.
          Recently I have completed my journey as a MERN stack developer .

        </p>
        <p>
        As a final-year B.Tech student, I am enhancing my proficiency in both front-end and back-end technologies. 
        My practical application of these skills is evident in the projects Ive created,
         which you can explore through the provided links in Projects Section.
        </p>
      
      </div>
    </div>
    <div className="skill-container-right">
            <img src="data:image/png;base64,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" alt="" className="skills-logo" />
            <img src="data:image/png;base64,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" alt="" className="skills-logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCtgCxiuJKYq-yagVro_Nkwa6cxJ4TC1Au3_2bDy4jsWxPmMfRtNWGl1yKg&s" alt="" className="skills-logo" />
            <img src="data:image/png;base64,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" alt="" className="skills-logo" />
            <img className='skills-logo' src='data:image/png;base64,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' alt=''/>
            <img className='skills-logo' src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F925%2F447%2Fpng-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png&tbnid=bIjxKcMbMmpt0M&vet=12ahUKEwiexJSGy6yEAxVe6KACHVEbCQ4QMygCegQIARBO..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-sreax&docid=vtuG906AAXp21M&w=920&h=920&q=express%20framework%20logo&ved=2ahUKEwiexJSGy6yEAxVe6KACHVEbCQ4QMygCegQIARBO" alt=""  />
            <img className='skills-logo' src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmui.com%2Fstatic%2Flogo.png&tbnid=c8Xpwh8F1YdRhM&vet=12ahUKEwj90Jijy6yEAxXKxjgGHSMsBQUQMygAegQIARBU..i&imgrefurl=https%3A%2F%2Fmui.com%2F&docid=qGS0XBm0mLWcOM&w=820&h=820&q=mui%20logo&ved=2ahUKEwj90Jijy6yEAxXKxjgGHSMsBQUQMygAegQIARBU" alt="" />
    </div>
  
  
  
  </div>
  )
}

export default About