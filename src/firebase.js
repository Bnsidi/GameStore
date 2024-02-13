


import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {

  apiKey: "AIzaSyDblKPxCmw2kV6gkB5aQPBPb2rxXTlb02A",

  authDomain: "xdgaming-ef369.firebaseapp.com",

  projectId: "xdgaming-ef369",

  storageBucket: "xdgaming-ef369.appspot.com",

  messagingSenderId: "73374407664",

  appId: "1:73374407664:web:43d435b049be14c4e95b35",

  measurementId: "G-028PMMEL1S"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
