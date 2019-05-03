import firebase from 'firebase';
import axios from 'axios';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "297392318648"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);
    
    axios.get(`http://localhost:4000/dashboard/code/${token}`).then(d=>{
      console.log(d.data);
    })
    return token;

  } catch (error) {
    console.error(error);
  }
}