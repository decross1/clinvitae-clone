import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Header and Footer Components
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

// Import Routes
import Home  from './components/Home/Home.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
};

export default App;
