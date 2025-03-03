//add content to about me page
import Avatar from '../assets/images/avatarPic2.png'


export default function AboutMe() {


  return (
    <>
      <div className=" container-fluid flex-wrap-column flex-column mt-5 col-12">
        <h2 className="text-left">About Me</h2>
        <img src={Avatar} id='avatar-pic' className="mt-3 mb-3" alt='avatar pic' />
        <p>
          I am a <strong>dedicated single father</strong> to a wonderful 6-year-old daughter. Our time together is precious—whether we're exploring city parks or visiting family.
          Between these moments, I have a deep passion for <strong>learning and self-improvement</strong>, always looking for new challenges to take on.
        </p>

        <p>
          I earned my <strong>bachelor’s degree from the University of Minnesota, Morris in 2018</strong> and spent the next five years working as a <strong>chemical technician</strong>.
          While I gained valuable experience in that field, I felt drawn to the world of <strong>software development</strong>—a passion I’ve had since my early exposure to computers.
          This realization led me to make a <strong>career transition into coding</strong>, a decision I’m truly excited about.
        </p>

        <p>
          To solidify my skills, I completed a <strong>Full Stack Developer Bootcamp</strong> through the University of Minnesota.
          This experience gave me hands-on training in <strong>modern web development technologies</strong>, including:
        </p>

        <ul>
          <li><strong>Front-End:</strong> HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind, React</li>
          <li><strong>Back-End:</strong> Node.js, Express, RESTful APIs, MySQL, MongoDB</li>
          <li><strong>Concepts:</strong> Routing, Object-Relational Mapping (ORM), Model-View-Controller (MVC), Agile methodologies</li>
          <li><strong>Version Control & Deployment:</strong> GitHub, AWS, and Azure</li>
        </ul>

        <p>
          Additionally, I have earned <strong>certifications in both AWS and Azure</strong>, further strengthening my ability to
          <strong>build and deploy scalable, cloud-based applications</strong>.
        </p>

        <p>
          I see <strong>software development as a continuous journey of growth and learning</strong>—one that excites me because there's always something new to master.
          I'm eager to apply my knowledge, collaborate with other professionals, and contribute meaningfully to the field of web development.
        </p>
      </div>
    </>
  )
}