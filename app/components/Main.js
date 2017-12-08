import React, { Component } from 'react';
import axios from 'axios';
import CampusList from './CampusList';
import { NavLink } from 'react-router-dom';


export default class Main extends Component {

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
    console.log(this.state, 'state inside render');
    return (
      <div>
        <h2><NavLink to={`/campuses`}>
          Campuses
        </NavLink></h2>
        <CampusList campuses={this.state.campuses} />
        <h2><NavLink to={`/students`}>
          Students
        </NavLink></h2>
      </div>
    );
  }
}

