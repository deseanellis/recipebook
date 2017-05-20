import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 header">
          <img src="https://cdn.rawgit.com/deseanellis/images/7ecf1b80/DeSean%20LogoSVG.svg" alt="logo" />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
