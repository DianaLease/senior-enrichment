import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  };
}

export const updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus
  };
}

export const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
}

// THUNK

export const fetchCampuses = () => {
  return function thunk (dispatch) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  }
}

export const postCampus = (campus, history) => {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampus(newCampus));
        history.push(`/campuses/${newCampus.id}`)
      })
  }
}

export const putCampus = (data, history) => {
  return function thunk(dispatch) {
    return axios.put(`/api/campuses/${data.id}`, data)
      .then(res => res.data)
      .then(campus => {
        dispatch(updateCampus(campus));
        history.push(`/campuses/${campus.id}`)
      })
  }
}

export const destroyCampus = (campusId) => {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(() => {
        dispatch(deleteCampus(campusId));
      })
  }
}

// REDUCER

const initialState = {
  campuses: [],
  campus: {}
}

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses })
    case UPDATE_CAMPUS:
      return Object.assign({}, state, { campus: action.campus })
    case GET_CAMPUS:
      return Object.assign({}, state, { campus: action.campus })
    case DELETE_CAMPUS:
      return Object.assign({}, state, {
        campuses:
          state.campuses.filter((data) => data.id !== action.campus)
      })
    default:
      return state;
  }
};

export default campusesReducer;
