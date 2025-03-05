//build the resume page

//import the resume component to display here
import ResumeView from "../components/ResumeView";

export default function Resume() {

  return (
    <>
      <div className=" container-fluid flex-wrap-column flex-column mt-5 col-12">
        <h2 className="text-left mb-3">Resume</h2>
        <div>
        <h4 className="text-left mb-3">Proficiencies</h4>
        <ul>
          <li>GitHub</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Express</li>
          <li>React</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Amazon Web Services</li>
          <li>Microsoft Azure</li>
        </ul>
        </div>
        <div className="text-center">
          <ResumeView />
        </div>
      </div>
    </>
  )
}
