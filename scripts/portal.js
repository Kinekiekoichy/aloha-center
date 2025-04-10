// portal.js
import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Protect page: redirect if not logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "/portal.html"; // redirect to login if not authenticated
  } else {
    console.log("Logged in as:", user.email);
    const welcomeMessage = document.getElementById("welcome-user");
    if (welcomeMessage) {
      welcomeMessage.textContent = `Welcome, ${user.email}`;
    }

    // Example: you could fetch user appointments here
    // loadAppointments(user.uid);
  }
});

// Optional logout support
window.logout = async function () {
  try {
    await signOut(auth);
    window.location.href = "/portal.html";
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
};
