import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6uKf_ZqkxfI5eqeTFlOnADbr7wpQ9JBc",
  authDomain: "iniciacao-cientifica-8ba44.firebaseapp.com",
  projectId: "iniciacao-cientifica-8ba44",
  storageBucket: "iniciacao-cientifica-8ba44.appspot.com",
  messagingSenderId: "1002882109834",
  appId: "1:1002882109834:web:52c7735165aef36cd5b873",
  measurementId: "G-2CZ4PX3RFQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);