import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';

class CampusList extends Component {

  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    return (
      <ul>
        {
          this.props.campuses.map((campus) => {
            return (
              <h2 key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  {campus.name}
                </NavLink>
              </h2>
            )
          })
        }
      </ul>
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
    loadCampuses: function () {
      dispatch(fetchCampuses());
    }
  }
}

const CampusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);

export default CampusListContainer;
