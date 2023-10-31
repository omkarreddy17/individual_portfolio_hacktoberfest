import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home'; // Import the Home component from the components folder
import Arbaz from './components/arbaz'; // Import the Home component from the components folder
import Vinayak from './components/vinayak'; 
function App() {
  return (
    <Router>
      <div>
        {/* Your navigation can go here */}
        <Switch>
          <Route path="/" exact component={Home} /> {/* Use the Home component */}
          <Route path="/arbaz" component={Arbaz} />
          <Route path="/vinayak" component={Vinayak} />
          {/* Define other routes and components as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
