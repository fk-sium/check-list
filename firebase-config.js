import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBT7zlmAd_UhzrvKLHd_8grMDrobc2suu8",
  authDomain: "milestone-e7556.firebaseapp.com",
  projectId: "milestone-e7556",
  storageBucket: "milestone-e7556.firebasestorage.app",
  messagingSenderId: "371617572242",
  appId: "1:371617572242:web:be941646e2060a5a378d4b",
  measurementId: "G-LPXTCJTJ4F"
};

const app = initializeApp(firebaseConfig);

export { app };

export const db = getFirestore(app);
