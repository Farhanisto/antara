import React from 'react'
import { Link } from 'react-router-dom'
import Patients from './patients/Patients'

const Home = () => {
  const token = localStorage.getItem('token')
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome patients Records</h1>
        <p className="lead">keeping patients record.</p>
        <hr className="my-4" />
        <p>Records.</p>
        {token ? (
          <Patients />
        ) : (
          <Link className="btn btn-primary btn-lg" to="/login" role="button">
            login to continue
          </Link>
        )}
      </div>
    </div>
  )
}

export default Home
