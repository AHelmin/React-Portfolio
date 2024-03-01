import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Portfolio() {


  return (
    <>
      <body >
        <div className="d-flex container-fluid flex-wrap-column flex-column mt-5 ms-5">
          <h2 className="text-left">Portfolio</h2>
          <div classNameName="d-flex container-fluid flex-wrap-column flex-md-row flex-column">
            <div className="col-12">
              <div className="container-fluid row no-gutters justify-content-around">
                <div className="card five-day-card col-6">
                  <div className="card-body">

                  </div>
                </div>
                <div className="card five-day-card col-6">
                  <div className="card-body">

                  </div>
                </div>
              </div>
              <div className="container-fluid row no-gutters justify-content-around">
                <div className="card five-day-card col-6">
                  <div className="card-body">

                  </div>
                </div>


                <div className="card five-day-card col-6">
                  <div className="card-body">

                  </div>
                </div>
              </div>
              <div className="container-fluid row no-gutters justify-content-around">
                <div className="card five-day-card col-6">
                  <div className="card-body">
                  </div>
                </div>
                <div className="card five-day-card col-6">
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </body >

    </>
  )
}