import React from 'react';
import MSRIT from '../assets/images/MSRIT.png';
import { Link } from 'react-router-dom';

export default function 
() {
  const University = {
    name: 'MS Ramaiah Institute of Technology',
    location: 'Bangalore',
    _id: '123',
  };
  return (
    <div>
        <div className="d-flex justify-content-left mt-5 ms-5">
        <div className="card" style={{ width: "20rem", maxHeight: "560px", position: "relative" }}>
          <img className="card-img-top" src={MSRIT} alt="Ramaiah University" />
          <div className="card-body" style={{minHeight:"80px"}}>
            <h5 className="card-title">{University.name}</h5>
          </div>
          <div className="location" style={{ position: "absolute", bottom: "10px", right: "10px", fontSize: "0.8rem", color: "#555" }}>
            {University.location}
          </div>
          <Link to={`/universities/${University._id}`} className="btn btn-primary">
          View Details
        </Link>
        </div>
      </div>
    </div>
  )
}
