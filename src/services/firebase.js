
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2J-kAcRclCcPP1_2oEcg6bALjC6vtuOU",
  authDomain: "fir-storage-84af9.firebaseapp.com",
  databaseURL: "https://fir-storage-84af9-default-rtdb.firebaseio.com",
  projectId: "fir-storage-84af9",
  storageBucket: "fir-storage-84af9.appspot.com",
  messagingSenderId: "331065603820",
  appId: "1:331065603820:web:840eced0668fffe09117c9"
};

// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBs8yl__sQ2Ys9x0zm2ZX-8xQHcSb54ZaI",
//   authDomain: "daksh-auth.firebaseapp.com",
//   projectId: "daksh-auth",
//   storageBucket: "daksh-auth.firebasestorage.app",
//   messagingSenderId: "552863360222",
//   appId: "1:552863360222:web:04e8ae3f3fa9302445ce4f",
//   measurementId: "G-JT4N8VQ7CG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);

