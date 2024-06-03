import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Feeling() {
  const feedback = useSelector((store) => store.feedback);
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEEDBACK', payload: { ...feedback, feeling } });
    setFeeling(1);
    history.push('/Understanding');
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='feeling'>Feeling?</label>
        <input
          data-testid='input'
          type='number'
          id='feeling'
          name='feeling'
          max={5}
          min={1}
          value={feeling}
          onChange={(e) => {
            setFeeling(e.target.value);
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
