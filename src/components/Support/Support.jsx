import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Support() {
  const feedback = useSelector((store) => store.feedback);
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEEDBACK', payload: { ...feedback, support } });
    setSupport(1);
    history.push('/Comments');
  };

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='support'>Support?</label>
        <input
          data-testid='input'
          type='number'
          id='support'
          name='support'
          max={5}
          min={1}
          value={support}
          onChange={(e) => {
            setSupport(e.target.value);
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
