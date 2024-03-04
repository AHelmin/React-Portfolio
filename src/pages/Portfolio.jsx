import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Portfolio() {


  return (
    <>
      <body >
        <div className=" container-fluid flex-wrap-column flex-column mt-5 ms-5 col-12">
          <h2 className="text-left mb-5">Portfolio</h2>
          <div classNameName="d-flex container-fluid flex-wrap-column flex-md-row flex-column">
            <div className="col-12">
              <div className="container-fluid row no-gutters justify-content-around mb-3">
                <div className="card col-6 mb-3" id='img1'>
                  <div className="card-body">
                  </div>
                </div>
                <div className="card col-6" id='img2'>
                  <div className="card-body">
                  </div>
                </div>
              </div>
              <div className="container-fluid row no-gutters justify-content-around mb-3">
                <div className="card col-6 mb-3" id='img3'>
                  <div className="card-body">
                  </div>
                </div>
                <div className="card col-6" id='img4'>
                  <div className="card-body">
                  </div>
                </div>
              </div>
              <div className="container-fluid row no-gutters justify-content-around">
                <div className="card col-6 mb-3" id='img5'>
                  <div className="card-body">
                  </div>
                </div>
                <div className="card col-6" id='img6'>
                  <div className="card-body d-flex flex-column">
                    <div class="mt-auto p-2">
                      <h4>Hello</h4>
                    </div>
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