import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Understanding() {
  const feedback = useSelector((store) => store.feedback);
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEEDBACK', payload: { ...feedback, understanding } });
    setUnderstanding(1);
    history.push('/Support');
  };

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='understanding'>Understanding?</label>
        <input
          data-testid='input'
          type='number'
          id='understanding'
          name='understanding'
          max={5}
          min={1}
          value={understanding}
          onChange={(e) => {
            setUnderstanding(e.target.value);
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
