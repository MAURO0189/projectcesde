import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaZr57Ro8Pgl-mgmtM5t9IDbuINfnF0vY",
  authDomain: "loginsuraproject.firebaseapp.com",
  projectId: "loginsuraproject",
  storageBucket: "loginsuraproject.appspot.com",
  messagingSenderId: "659907274952",
  appId: "1:659907274952:web:20371d751890999f695dfd",
  measurementId: "G-7MH3W4W4TC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
