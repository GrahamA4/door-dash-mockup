import axios from 'axios';

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`);
  });
};
