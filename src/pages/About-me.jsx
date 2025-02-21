//add content to about me page
import Avatar from '../assets/images/avatarPic2.png'


export default function AboutMe() {


  return (
    <>
      <div className=" container-fluid flex-wrap-column flex-column mt-5 col-12">
        <h2 className="text-left">About Me</h2>
        <img src={Avatar} id='avatar-pic' className="mt-3 mb-3"alt='avatar pic' />
        <p>I am a single father of a wonderful 6 year old daughter. Our time together is
          precious, whether it's at a city park or visiting 
          with family. Between events with her, I also enjoy 
          learning new things.
        </p>
        <p>
          I earned  my bachelor's degree from the University of Minnesota, 
          Morris in 2018. I spent the next 5 years worker as a chemical technician.
         After spending five years in the field, I felt the need for a change 
         and decided to pursue a career in coding. I have always been drawn to
         computers and almost chose a major of computer science. I am thankful 
         to have the opportunity to delve into the world of coding.
        </p>

        <p>
          I have completed a full stack developer bootcamp offered through the University of Minnesota.
          Looking forward, it is clear that this is a journey in which there
          seems to be no end. There will always be something new to learn and 
          that is what makes this career field so exciting.
        </p>
        <p>
          The coursework in which I have experience is GitHub, HTML, CSS, JavaScript, JQuery,
          Bootstrap, Tailwind, Node.js, Express, React, RESTful API, MySQL, MongoBD. As 
          well as concepts such as routing, object-relational mapping, model-view-controller, and Agile methodologies.
          With the introduction and implementation of these topics, I feel 
          that I am prepared to begin my career in development and work my way to mastery.
        </p>
      </div>
    </>
  )
}