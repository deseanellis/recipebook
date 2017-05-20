import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import NoticeInitial from './subs/Notice_Initial';
import NoticeDelete from './subs/Notice_Delete';
import NoticeNew from './subs/Notice_New';
import NoticeEdit from './subs/Notice_Edit';

import { GetList, GetScreen } from '../actions/index';
import { _item } from '../actions/index';
import Utilities from '../functions/Utilities';

class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipeFound: false,
      recipeFocus: ''
    };

    this.screenToDisplay = this.screenToDisplay.bind(this);

  }
  componentDidMount() {
    var recipeFound = (localStorage.getItem(_item) !== null && JSON.parse(localStorage.getItem(_item)).length > 0) ? true : false;

    this.props.GetList();

    this.setState({
      recipeFound
    });

  }

  componentWillReceiveProps(nextProps) {

    var recipeFound = (nextProps.recipes.length === 0) ? false : true;

    this.setState({
      recipeFound
    });

  }

  render() {
    const activeScreen = this.screenToDisplay();
    return (
      <div className="row">

        <div className="col-sm-3 sidebar">
          <div className="heading">
            <span>Recipe</span><span> List</span>
          </div>
          <ul  className="list-group">
            {this.renderRecipeList(this.state.recipeFound)}
          </ul>
        </div>

        <div className="col-sm-8  col-sm-offset-1 content">
          {activeScreen}
        </div>

      </div>
    );
  }

  screenToDisplay() {
    var toReturn;

    switch (this.props.screen) {
      case null:
      case undefined:
        toReturn = <NoticeInitial clean={(this.state.recipeFound) ? 'no' : 'yes'} />;
        break;
      case "new":
        toReturn = <NoticeNew helperText={this.props.helperText}/>;
        break;
      case "edit":
        toReturn = <NoticeEdit helperText={this.props.helperText}>{this.state.recipeFocus}</NoticeEdit>;
        break;
      case "delete":
        toReturn = <NoticeDelete>{this.state.recipeFocus}</NoticeDelete>;
        break;
      default:
        toReturn = <NoticeInitial clean={(this.state.recipeFound) ? 'no' : 'yes'} />;
    }

    return toReturn;
  }

  renderRecipeList(recipeFound){
    if (recipeFound) {
      var recipes = [...this.props.recipes];
      recipes.sort(Utilities.compare);
      return recipes.map((recipe, index) => {
        return(
            <li key={index} className="list-group-item">
              <div>
                {recipe.title}
              </div>
              <div>
                <span className="btn-group">
                  <button className="btn btn btn-sm btn-green btn-edit" onClick={() => this.onScreenClick('edit', recipe)}><i className="fa fa-pencil-square-o"></i></button>
                  <button className="btn btn-sm btn-orange btn-delete" onClick={() => this.onScreenClick('delete', recipe)}><i className="fa fa-trash-o"></i></button>
                </span>
              </div>
            </li>
        );
      });
    }
  }

  onScreenClick(screen, recipeFocus){
    this.props.GetScreen(screen);
    this.setState({
      recipeFocus
    });
  }

}

function mapStateToProps(state) {
  return {
    screen: state.screen.selected,
    recipes: state.recipe.list
  };
}

export default connect(mapStateToProps, { GetList, GetScreen })(Content);
