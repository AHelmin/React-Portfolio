import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function AboutMe() {


  return (
    <>
      <h2 className="text-left">About Me</h2>
      <p>
        I worked as a chemist and got my bachelor's degree from the
        University of Minnesota. After spending five years in the field,
        I felt the need for a change and decided to pursue an exciting
        career in coding.
      </p>

      <p>
        Right now, I'm fully immersed in a challenging bootcamp program.
        It's intense, but I'm confident that with hard work, I'll
        successfully finish the program. I have the determination to see
        it through, and my goal is to become a full stack developer with
        the skills I'm gaining from this bootcamp.
      </p>
      <p>
        My coursework includes HTML, CSS, JavaScript, Node.js, React, APIs.
        This list is by no means an exhaustive list of the coursework that I
        have yet to experience.
      </p>

    </>
  )
}