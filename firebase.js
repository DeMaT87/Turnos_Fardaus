import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXAser955dXStdR9BpaB8ow5IT6nQdK7I",
  authDomain: "turnos-app-88.firebaseapp.com",
  projectId: "turnos-app-88",
  storageBucket: "turnos-app-88.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "turnos-app-88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);