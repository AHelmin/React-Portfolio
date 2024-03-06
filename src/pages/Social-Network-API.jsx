import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function SocialNetworkAPI() {


    return (
        <>
    <div className=" container-fluid flex-wrap-column flex-column mt-5 ms-5 col-12">
        <h2 className="text-left mb-3">Social Network API Tech Stack</h2>
        <h4 className="text-left mb-3">General</h4>
        <ul>
          <li>Solo Project</li>
          <li>Part of Bootcamp Curriculum</li>
          <li>Server-Side Only App</li>
        </ul>
        <h4 className="text-left mb-3">Back-End Tech Stack</h4>
        <ul>
          <li>Express</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
        </ul>
      </div>
        
        
        </>
      )
    }