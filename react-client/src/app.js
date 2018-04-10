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
import GeneTable from './components/GenePage/GenePage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geneVariants: []
    }

    this.findVariants = this.findVariants.bind(this);
  }

  findVariants(geneList) {
    this.setState({
      geneVariants: geneList.data
    }, () => {
      console.log(this.state);
    })
  }
  
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' render={routeProps => <Home {...routeProps}  findVariants={this.findVariants}/>} />
            <Route exact path='/home' render={routeProps => <Home {...routeProps} findVariants={this.findVariants} />} />
            <Route exact ='/gene' render={routeProps => <GeneTable {...routeProps} geneVariants={this.state.geneVariants} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
};

export default App;

