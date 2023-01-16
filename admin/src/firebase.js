
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD01Xo4iGW8bn40u4mfSP3ENUEZWdI5OkE",
  authDomain: "netflix-clone-5a57f.firebaseapp.com",
  projectId: "netflix-clone-5a57f",
  storageBucket: "netflix-clone-5a57f.appspot.com",
  messagingSenderId: "838601126744",
  appId: "1:838601126744:web:f8efa11e4ea9ea61dbab2d",
  measurementId: "G-LXG15HEEWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
