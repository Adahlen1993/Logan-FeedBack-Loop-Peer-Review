import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Comments() {
  const feedback = useSelector((store) => store.feedback);
  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEEDBACK', payload: { ...feedback, comments } });
    setComments('');
    history.push('/Review');
  };

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='comments'>Additional Comments:</label>
        <input
          data-testid='input'
          type='text'
          id='comments'
          name='comments'
          max={5}
          min={1}
          value={comments}
          onChange={(e) => {
            setComments(e.target.value);
          }}
        />
        <button
          data-testid='next'
          type='submit'
        >
          NEXT
        </button>
      </form>
    </>
  );
}
