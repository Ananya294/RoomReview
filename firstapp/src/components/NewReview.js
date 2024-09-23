import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewReview() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reviewData, setReviewData] = useState({
      rating: '',
      comment: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prevData => ({ ...prevData, [name]: value}));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`/api/universities/${id}/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reviewData)
      });
      if (response.ok) {
        navigate(`/universities/${id}`);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  
return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          className="form-control"
          id="rating"
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea
          className="form-control"
          id="comment"
          name="comment"
          value={reviewData.comment}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit Review</button>
    </form>
  );
}

export default NewReview;

