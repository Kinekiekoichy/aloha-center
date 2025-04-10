// portal.js - Login Page Script

import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Welcome back, " + user.email);
          window.location.href = "/dashboard.html"; // You can customize the redirect
        })
        .catch((error) => {
          console.error("Login failed:", error);
          alert("Login failed. Please check your email and password.");
        });
    });
  }
});