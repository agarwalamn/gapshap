import React from 'react';
import Chat from './components/Chat/chat'
import Join from './components/Join/join'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join}/>
      <Route path="/chat" component={Chat}/>
    </Router>
  )
}

export default App;
