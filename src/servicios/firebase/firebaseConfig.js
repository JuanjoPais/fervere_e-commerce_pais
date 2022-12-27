import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC6-BHTNr7jZDK0hNier-umoK1qzcy_RGE",
	authDomain: "fervere-e-commerce.firebaseapp.com",
	projectId: "fervere-e-commerce",
	storageBucket: "fervere-e-commerce.appspot.com",
	messagingSenderId: "101553792770",
	appId: "1:101553792770:web:1649d6eeb96b264a27041b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
