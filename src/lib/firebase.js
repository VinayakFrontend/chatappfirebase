
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB8qXYzCH4V3zVBoKJjqRl8lLUwdt5_Wvc",
//   authDomain: "chat-app-2c647.firebaseapp.com",
//   projectId: "chat-app-2c647",
//   storageBucket: "chat-app-2c647.firebasestorage.app",
//   messagingSenderId: "566772389745",
//   appId: "1:566772389745:web:718a34763f0474c57f48d0",
//   measurementId: "G-XS150JLXVJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8qXYzCH4V3zVBoKJjqRl8lLUwdt5_Wvc",
  authDomain: "chat-app-2c647.firebaseapp.com",
  projectId: "chat-app-2c647",
  storageBucket: "chat-app-2c647.appspot.com",  // ✅ FIXED .app → .appspot.com
  messagingSenderId: "566772389745",
  appId: "1:566772389745:web:718a34763f0474c57f48d0",
  measurementId: "G-XS150JLXVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export required services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
