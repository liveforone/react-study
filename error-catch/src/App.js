import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary ';
import User from './User';

function App() {
  const user = {
    id : 1,
    username : 'user1'
  };
  return (
    <ErrorBoundary>
      <User user={user}/>
    </ErrorBoundary>
  );
}

export default App;
