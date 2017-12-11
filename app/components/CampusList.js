import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses, destroyCampus } from '../reducers/campusesReducer';

class CampusList extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  handleDelete(campusId) {
    this.props.deleteCampus(campusId);
  }

  render() {
    return (
      <div>
        <NavLink to="/new-campus">
          <button className="addNew">
            <h3>Add New Campus</h3>
          </button>
        </NavLink>
        <ul>
          {
            this.props.campuses.map((campus) => {
              return (
                <div key={campus.id}>
                <h2 className="list">
                  <NavLink to={`/campuses/${campus.id}`}>
                    {campus.name}
                  </NavLink>
                  </h2>
                  <button onClick={() => this.handleDelete(campus.id)}>X</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (storeState) => {
  return {
    campuses: storeState.campuses.campuses
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCampuses: function () {
      dispatch(fetchCampuses());
    },
    deleteCampus: function (campusId) {
      dispatch(destroyCampus(campusId))
    }
  }
}

const CampusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);

export default CampusListContainer;
