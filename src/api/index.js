import axios from 'axios';

export const fetchData = async function() {
  const response = await axios.get('/');
  return response
}