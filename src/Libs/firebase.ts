import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: "projeto3-gallery.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSASINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  export const storage = getStorage(firebaseApp);