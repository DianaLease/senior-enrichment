import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';

class CampusList extends Component {


    // this.selectCampus = this.selectCampus.bind(this);
    // this.deselectCampus = this.deselectCampus.bind(this);

  componentDidMount() {
    this.props.loadCampuses();
  }

  // selectCampus(campusId) {
  //   axios.get(`/api/campuses/${campusId}`)
  //     .then(res => res.data)
  //     .then(campus => this.setState({
  //       selectedCampus: campus
  //     }));
  // }

  // deselectCampus() {
  //   this.setState({ selectedCampus: {} });
  // }
  render() {
    console.log('props..', this.props)
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
