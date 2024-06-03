import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {
  const dispatch = useDispatch();

  const fetchFeedback = async () => {
    try {
      const result = await axios.get('/api/feedback');
      console.log(result.data);
      dispatch({ type: 'SET_FEEDBACK', payload: result.data });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route
          path='/'
          exact
        >
          <Feeling />
        </Route>
        <Route
          path='/Understanding'
          exact
        >
          <Understanding />
        </Route>
        <Route
          path='/Support'
          exact
        >
          <Support />
        </Route>
        <Route
          path='/Comments'
          exact
        >
          <Comments />
        </Route>
        <Route
          path='/Review'
          exact
        >
          <Review fetchFeedback={fetchFeedback} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
