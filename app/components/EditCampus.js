
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putCampus, fetchCampuses } from '../reducers/campusesReducer';

class EditCampus extends Component {
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

  componentDidMount() {
    this.props.getCampuses();
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
    let editedCampus = {
      id: this.props.campus.id,
      name: (this.state.name) ? this.state.name : this.props.campus.name,
      imgUrl: (this.state.imgUrl) ? this.state.imgUrl : this.props.campus.imgUrl,
      description: (this.state.description) ? this.state.description : this.props.campus.description
    }
    alert('The campus was edited.');
    this.props.handleSubmit(event, editedCampus);
  }

  render() {
    if (this.props.campus) {
      return (
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <h2> Edit a Campus </h2>
            <label>Name:
            <input
                type="text"
                onChange={this.changeName}
                name="name"
                defaultValue={this.props.campus.name || 'Enter name'}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Image URL:
            <input
                type="text"
                onChange={this.changeImgUrl}
                name="imgUrl"
                defaultValue={this.props.campus.imgUrl || 'Enter image URL'}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Description:
            <input
                type="text"
                onChange={this.changeDescription}
                name="email"
                defaultValue={this.props.campus.description || 'Enter description'}
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit">Save Campus</button>
          </div>
        </form>
      )
    } else {
      return (
        <div />
      );
    }
  }
}

const mapStateToProps = (storeState, ownProps) => {
  return {
    campuses: storeState.campuses.campuses,
    campus: storeState.campuses.campuses.filter((campus) => campus.id === parseInt(ownProps.match.params.campusId))[0]
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCampuses: function () {
      dispatch(fetchCampuses());
    },
    handleSubmit: function (event, campus) {
      event.preventDefault();
      dispatch(putCampus(campus, ownProps.history));
    }
  }
}


const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus);

export default EditCampusContainer;
