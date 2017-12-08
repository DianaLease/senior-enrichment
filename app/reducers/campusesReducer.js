import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const fetchCampuses = () => {
  return function (dispatch) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  }
}

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    default:
      return state;
  }
};

export default campusesReducer;
