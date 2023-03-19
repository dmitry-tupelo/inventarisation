import React from 'react';
import SearchBar from '../../components/Search/Search';

import { initializeApp } from "firebase/app";
import { getFirestore,  collection, getDocs } from "firebase/firestore";

const HomePage = () => {


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgBCY9cbnKguyeYGHxWrg8NMX-yN6z8T0",
  authDomain: "inventarisation-7a1c0.firebaseapp.com",
  projectId: "inventarisation-7a1c0",
  storageBucket: "inventarisation-7a1c0.appspot.com",
  messagingSenderId: "243472533773",
  appId: "1:243472533773:web:6d885b1a0fbc35d1bfc844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


getDocs(collection(db, "products")).then((result) => { 
    result.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
})

    return(
        <div>
        <SearchBar />
        </div>
    )

}

export default HomePage