// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDuEmuOq2Dr_sgOGIrofyRGvgKFR14jCwU",

authDomain: "iffl-office.firebaseapp.com",

projectId: "iffl-office",

storageBucket: "iffl-office.firebasestorage.app",

messagingSenderId: "426694953889",

appId: "1:426694953889:web:9193361c139a4bd6dd59e0"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
