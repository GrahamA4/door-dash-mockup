import api from './apiConfig';
import jwtDecode from 'jwt-decode';

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/sign-up', credentials);
    localStorage.setItem('token', resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/sign-in', credentials);
    localStorage.setItem('token', resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem('token');
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const resp = await api.get('/verify');
    return resp.data;
  }
  return false;
};

export const getUser = async (username) => {
  const resp = await api.get(`/get-user/${username}`);
  return resp.data;
};
