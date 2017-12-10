
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../reducers/campusesReducer';

class NewCampus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imgUrl: '',
      description: ''
    };

    this.changeName = this.changeName.bind(this);
    this.changeImgUrl = this.changeImgUrl.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  changeName(event) {
    this.setState({
      name: event.target.value
    })
  }

  changeImgUrl(event) {
    this.setState({
      imgUrl: event.target.value
    })
  }

  changeDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  onSubmit(event) {
    alert('A new campus was created.');
    this.props.handleSubmit(event, this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div className="form-group">
          <h2> Create a New Campus </h2>
          <label>Campus Name:
            <input
              type="text"
              onChange={this.changeName}
              name="name"
              placeholder="Enter campus name"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Image URL:
            <input
              type="text"
              onChange={this.changeImgUrl}
              name="imgUrl"
              placeholder="Enter image URL"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Description:
            <input
              type="text"
              onChange={this.changeDescription}
              name="description"
              placeholder="Enter description"
            />
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Create Campus</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: function (event, campus) {
      event.preventDefault();
      dispatch(postCampus(campus, ownProps.history));
    }
  }
}


const newCampusContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampus);

export default newCampusContainer;
