import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetScreen, UpdateRecipe } from '../../actions/index';

class NoticeEdit extends Component {
  constructor(props) {
    super(props);

    const recipe = this.props.children;

    this.state = {
      title: recipe.title,
      ingredients: recipe.ingredients,
      url: recipe.url
    };

  }

  componentWillReceiveProps(nextProps) {
    const recipe = nextProps.children;

    this.setState({
      title: recipe.title,
      ingredients: recipe.ingredients,
      url: recipe.url
    });
  }
  render() {

    return(
      <div className="notice-edit">
        <div className="heading">Edit Recipe: <span>{this.state.title}</span></div>
        <div className="form-area">
          <div>
            <input type="text" className="input-flat" placeholder={"\uf040 Recipe Title"} value={this.state.title} onChange={(event) => this.onInputChange("title",event)} maxLength="18" />
          </div>
          <div className="middle-content">
            <div>
              <textarea className="input-flat" placeholder={"\uf0f5 Ingredients"} value={this.state.ingredients} onChange={(event) => this.onInputChange("ingredients",event)}></textarea>
              <p className="helper-text">{this.props.helperText}</p>
            </div>
            <div>
              {this.state.url !== '' && <img src={this.props.children.url} alt={this.props.children.url} />}
            </div>
          </div>
          <div className="submission">
            <div>
              <input type="text" className="input-flat" placeholder={"\uf0c1 Image URL"} value={this.state.url} onChange={(event) => this.onInputChange("url",event)} />
            </div>
            <div>
              <button className="btn btn-green" onClick={() => this.onSaveClick(this.props.children)}>Update</button>
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

  onSaveClick(previous) {
    var updateRecipe = {};
    updateRecipe.title = this.state.title;
    updateRecipe.ingredients = this.state.ingredients;
    updateRecipe.url = this.state.url;

    this.props.UpdateRecipe(updateRecipe, previous);
  }
}

export default connect(null, { GetScreen, UpdateRecipe })(NoticeEdit);
