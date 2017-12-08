import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CampusList from './CampusList'

export default class StatefulCampusList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campuses: []
    };
  }

  componentDidMount() {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }

  render() {
    const campuses = this.state.campuses;
    console.log(this.state)
    return (
      <h1>{campuses[1].name}</h1>
    )
  }
}
