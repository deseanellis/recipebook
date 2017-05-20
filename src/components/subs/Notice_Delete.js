import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetScreen, DeleteRecipe } from '../../actions/index';

class NoticeDelete extends Component {
  render(){
    const recipe = this.props.children;
    return(
      <div className="notice-delete">
        <div className="text-center">
          <div>
            <span>
              <i className="fa fa-times-circle fa-5x info-icon"></i>
              <br />
              Are you sure you want to delete your <strong>{`"${recipe.title}"`}</strong> recipe
            </span>
          </div>
          <div className="call-to-action">
            <button className="btn btn-orange btn-delete" onClick={() => this.onDeleteClick(recipe)}>Delete Recipe</button>
            <button className="btn btn-green btn-cancel" onClick={() => this.onScreenClick()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  onScreenClick(screen){
    this.props.GetScreen(screen);
  }

  onDeleteClick(recipe){
    this.props.DeleteRecipe(recipe);
  }

}

export default connect(null, { GetScreen, DeleteRecipe })(NoticeDelete);
