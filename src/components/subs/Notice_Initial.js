import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetScreen } from '../../actions/index';

class NoticeInitial extends Component {
  render(){

    return(
      <div className="notice-initial">
        <div className="text-center">
          <div>
            {
              this.props.clean === 'yes' &&
              <span>
                <i className="fa fa-question-circle fa-5x info-icon"></i>
                <br />
                You haven't added any receipes
              </span>
            }
            {
              this.props.clean === 'no' &&
              <span>
                <i className="fa fa-check-circle fa-5x info-icon-green"></i>
                <br />
                Welcome Back! View and edit your existing recipes or add new ones
              </span>
            }
          </div>
          <div className="call-to-action">
            <button className="btn btn-green btn-new" onClick={() => this.onScreenClick('new')}>Add New Recipe</button>
          </div>
        </div>
      </div>
    );
  }

  onScreenClick(screen){
    this.props.GetScreen(screen);
  }

}

export default connect(null, { GetScreen })(NoticeInitial);
