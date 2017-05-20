import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <span>Recipe</span> Box
        </Header>
        <Content helperText="For readability, please seperate ingredients into new lines." />
        <Footer>
          Free Code Camp <i className="fa fa-free-code-camp"></i> - React Project, DeSean Ellis <i className="fa fa-copyright"></i> 2017
        </Footer>
      </div>
    );
  }
}

export default App;
