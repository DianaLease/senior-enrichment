import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';

class CampusList extends Component {

  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    return (
      <div>
        <button id="addCampus">
          <NavLink to="/new-campus">
            Add New Campus
          </NavLink>
        </button>
        <ul>
          {
            this.props.campuses.map((campus) => {
              return (
                <h2 key={campus.id} className="list">
                  <NavLink to={`/campuses/${campus.id}`}>
                    {campus.name}
                  </NavLink>
                </h2>
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
    campuses: storeState.campuses
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: function () {
      dispatch(fetchCampuses());
    }
  }
}

const CampusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);

export default CampusListContainer;
