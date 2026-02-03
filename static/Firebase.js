// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔴 Paste YOUR config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
window.loginUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "Login successful!";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 800);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
};

// SIGN UP
window.signupUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "Account created!";
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
};

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
