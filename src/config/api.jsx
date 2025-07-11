import axios from 'axios';

// export const API_BASE_URL = "http://localhost:5000/api";
export const API_BASE_URL = "https://adesolaplasticsstore.onrender.com/api";


export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  console.log('Fetched products:', response.data);
  return response.data;
};