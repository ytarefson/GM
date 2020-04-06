import axios from 'axios';
import { GET_ERRORS } from './types';
import Router from 'next/router';

// validate email
export const validateFormData = data => dispatch => {
  axios
    .post('/api/form-validation', data)
    .then(res => {
      console.log(res);
      console.log('Successfully sent');
      Router.push('/confirm-askform');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
