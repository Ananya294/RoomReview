import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


function UniversityDetails()
{
    const { id } = useParams();
    const [university, setUniversity] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/universities/${id}')
        .then(response => response.json())
        .then(data => {
            setUniversity(data.university);
            setReviews(data.reviews);
        });
    }, [id]);

    return (
        <div>
            <h1>{university.name}</h1>
            <p>Location: {university.location}</p>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review._id}>
                        <strong>Rating:</strong> {review.rating} <br />
                        <strong>Comment:</strong> {review.comment}
                    </li>
                ))}
            </ul>
            <Link to={`/universities/${id}/new-review`} className="btn btn-primary">
                Write a Review
            </Link>
        </div>

    );
}

export default UniversityDetails;