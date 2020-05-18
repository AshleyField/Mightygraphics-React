import React, { Component } from 'react';

//Components
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import TextAreaTop from './components/TextAreaTop';
import MobileFirst from './components/MobileFirst';
import HomeWebGrid from './components/HomeWebGrid';

//Pages

import About from './components/pages/About';
import Contact from './components/pages/Work';
import Work from './components/pages/Contact';

//Router
import {BrowserRouter as Router, Route} from 'react-router-dom';

//CSS
import './style.css';

//Arrays


class App extends Component {
  render() {
		return (
			<Router>
        <div className="App">
            <div className="wrapper">
              <Header />
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <Banner />
                    <TextAreaTop />
                    <MobileFirst />
                    <HomeWebGrid />
                  </React.Fragment>
                )} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/work" component={Work} />
              <Footer />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
