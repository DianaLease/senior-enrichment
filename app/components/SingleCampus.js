import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class CampusList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCampus: {}
    };
  }

  // componentDidMount() {
  //   axios.get('/api/campuses/:campusId')
  //     .then(res => res.data)
  //     .then(selectedCampus => {
  //       this.setState({ selectedCampus })
  //     });
  // }


  render() {
    // console.log(this.state.selectedCampus.name);
    return (
      <div>
        <h2>hi</h2>
      </div>
    )
  }
}

