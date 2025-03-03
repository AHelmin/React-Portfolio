//add content to employee tracker page

export default function ToDoApp() {


  return (
    <>
      <div className=" container-fluid flex-wrap-column flex-column mt-5 ms-5 col-12">
        <h2 className="text-left mb-3">To-Do App</h2>
        <h4 className="text-left mb-3">General</h4>
        <ul>
          <li>Fullstack App</li>
        </ul>
        <h4 className="text-left mb-3">Client-Side Tech Stack</h4>
        <ul>
          <li>React + Vite</li>
          <li>Fetch Api</li>
          <li>React Hooks (useState, useEffect)</li>
          <li>localStorage (for JWT storage)</li>
          <li>CSS</li>
        </ul>
        <h4 className="text-left mb-3">Server-Side Tech Stack</h4>
        <ul>
          <li>Node.js + Express.js</li>
          <li>MongoDB + Mongoose</li>
          <li>JWT (for authentication)</li>
          <li>bcrypt.js (for password hashing)</li>
          <li>CORS (to enable frontend-backend communication)</li>
          <li>dotenv (to manage environment variables)</li>
        </ul>
        <h4 className="text-left mb-3">Future Work</h4>
        <ul>
          <li>Improve UI/UX</li>
          <li>Additional styling for appeal</li>
        </ul>
      </div>


    </>
  )
}