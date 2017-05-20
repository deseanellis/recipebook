import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetScreen, AddRecipe } from '../../actions/index';

class NoticeNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      ingredients: '',
      url: ''
    };
  }
  render() {
    return(
      <div className="notice-new">
        <div className="heading">Add New Recipe</div>
        <div className="form-area">
          <div>
            <input type="text" className="input-flat" placeholder={"\uf040 Recipe Title"} value={this.state.title} onChange={(event) => this.onInputChange("title",event)} />
          </div>
          <div>
            <textarea className="input-flat" placeholder={"\uf0f5 Ingredients"} value={this.state.ingredients} onChange={(event) => this.onInputChange("ingredients",event)}></textarea>
            <p className="helper-text">{this.props.helperText}</p>
          </div>
          <div className="submission">
            <div>
              <input type="text" className="input-flat" placeholder={"\uf0c1 Image URL"} value={this.state.url} onChange={(event) => this.onInputChange("url",event)} />
            </div>
            <div>
              <button className="btn btn-green" onClick={() => this.onSaveClick()}>Save</button>
              <button className="btn btn-orange btn-cancel" onClick={() => this.onScreenClick()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onScreenClick(screen){
    this.props.GetScreen(screen);
  }

  onInputChange(input, event) {
    switch (input) {
      case "ingredients":
        this.setState({
          ingredients: event.target.value
        });
        break;
    case "title":
      this.setState({
        title: event.target.value
      });
      break;
      case "url":
        this.setState({
          url: event.target.value
        });
        break;
      default:

    }
  }

  onSaveClick() {
    var newRecipe = {};
    newRecipe.title = this.state.title;
    newRecipe.ingredients = this.state.ingredients;
    newRecipe.url = this.state.url;

    this.props.AddRecipe(newRecipe);
  }
}

export default connect(null, { GetScreen, AddRecipe })(NoticeNew);
