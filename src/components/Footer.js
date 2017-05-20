import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 footer">
          <span>
            {this.props.children}
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
