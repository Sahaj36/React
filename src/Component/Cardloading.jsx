import React from 'react'

function Cardloading() {
  return (
        <div className="card" aria-hidden="true">
            <img src="..." className="card-img-top bg-secondary" alt="..." style={{height : "200px"}}/>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6" />
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7" />
                <span className="placeholder col-4" />
                <span className="placeholder col-4" />
                <span className="placeholder col-6" />
                <span className="placeholder col-8" />
              </p>
              <a
                className="btn btn-primary disabled placeholder col-6"
                aria-disabled="true"
              />
            </div>
          </div>
  )
}

export default Cardloading
