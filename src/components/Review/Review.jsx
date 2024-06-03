import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess/SubmissionSuccess';

export default function Review({ fetchFeedback }) {
  const feedback = useSelector((store) => store.feedback);
  const [showModal, setShowModal] = useState(false);

  const submitFeedback = async () => {
    try {
      console.log(feedback);
      await axios.post('/api/feedback', feedback);
      fetchFeedback();
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Review Your Feedback</h2>
      <p>
        <strong>Feeling:</strong> {feedback.feeling}
      </p>
      <p>
        <strong>Understanding:</strong> {feedback.understanding}
      </p>
      <p>
        <strong>Support:</strong> {feedback.support}
      </p>
      <p>
        <strong>Additional Comments:</strong> {feedback.comments}
      </p>
      <button
        data-testid='next'
        onClick={() => submitFeedback()}
      >
        Submit Feedback
      </button>
      <SubmissionSuccess
        show={showModal}
        setShow={setShowModal}
      />
    </>
  );
}
