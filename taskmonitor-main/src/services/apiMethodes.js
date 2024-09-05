

// connexion
import {api} from "src/boot/axios";


// src/services/apiMethodes.js
import axios from 'axios';

const BASE_URL = 'https://taskmonitor.toocekadriver.com/api/v1';

export async function login(email, password) {
  const data = {
    email,
    password,
  };
  const url = `${BASE_URL}/login`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.data && response.data.token) {
      return response.data;
    } else {
      throw new Error('Token not found in response');
    }
  } catch (error) {
    throw new Error('Erreur de connexion : ' + (error.response ? error.response.data.message : error.message));
  }
}


// https://taskmonitor.toocekadriver.com/api/v1/find-user-by-token'

export async function userInfo(){
  const token = localStorage.getItem('token');
  const config = {
    headers:{
      Authorization: `Bearer ${token}`,

    }

  }
  const url = 'https://taskmonitor.toocekadriver.com/api/v1/find-user-by-token';
  const reponse = await api.post(url,{},config)
  console.log(reponse);
return reponse
}


// src/api/reset-password.js changement de password



export async function resetPassword({ nouveauPass, acteulPass }) {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };

  const data = {
    new_password: nouveauPass,
    password: acteulPass,
  };

  try {
    const response = await axios.post(`${BASE_URL}/update-password`, data, config);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}


// changement profile EditPage


const url = 'https://taskmonitor.toocekadriver.com/api/v1/update-profile'

export async function edit(username, email, phoneNumber) {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Set the Authorization header
    },
  };
  const data = {
    //username: username,
    name: name,
    email: email,
    phone: phoneNumber,
    token: token
  };
  try {
    const response = await axios.post(url, data, config);

    return response.data;
  } catch (error) {
    console.error(error)
  }
}



// REGISTER


export async function registerUser(name, email, password,confirmPassword) {
  const url = 'https://taskmonitor.toocekadriver.com/api/v1/register';
  const data = {
    name,
    email,
    password,
    confirmPassword

  };

  try {
    const response = await api.post(url, data);
    return response.data; // Retourne les données de la réponse
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error; // Rejette l'erreur pour qu'elle puisse être capturée par le composant
  }
}





/*export function edit(usernameM,emailM,phoneNumberM){
const datas = {
  username:usernameM,
  email: emailM,
  phoneNumber:phoneNumberM,

  }
  const url = 'https://taskmonitor.toocekadriver.com/api/v1/update-profile'
  api.post(url, datas).then( function(response)  {
      console.log(response);
    })
}*/
