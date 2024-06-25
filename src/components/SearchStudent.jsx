import React from 'react'
import StudentNavbar from './StudentNavbar'

const SearchStudent = () => {
  return (
    <div>
        <StudentNavbar/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                        <label htmlFor="" className="form-label">
                            Admission Number
                        </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                        <button className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent