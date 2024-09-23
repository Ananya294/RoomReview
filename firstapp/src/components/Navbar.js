import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand fs-3 fw-bold custom-font" to="/">RoomReview</Link>
            
            <form className="d-flex ms-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"21rem"}}  />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <Link className="btn btn-outline-light ms-5" to="/login">Login</Link>
          </div>
    </nav>
    </div>
  )
}

