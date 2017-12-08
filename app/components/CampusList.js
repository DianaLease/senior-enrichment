import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class CampusList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      selectedCampus: {}
    };
    this.selectCampus = this.selectCampus.bind(this);
    // this.deselectCampus = this.deselectCampus.bind(this);
  }

  componentDidMount() {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }

  selectCampus(campusId) {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        selectedCampus: campus
      }));
  }

  // deselectCampus() {
  //   this.setState({ selectedCampus: {} });
  // }
  render() {
    return (
      <ul>
        {
          this.state.campuses.map((campus) => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  {campus.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
