// Redirect to the form page
function redirectToForm() {
    window.location.href = "form.html?action=add";
}

function redirectToTable() {
    window.location.href = "index.html";
}

function redirectToLogin() {
    window.location.href = "login.html";
}

// Redirect to edit a specific row
function editRow(key) {
    window.location.href = `form.html?action=edit&id=${key}`;
}

function redirectToDashboard() {
    window.location.href = "dashboard.html";
}

// // Events to monitor for user activity
// const events = ["mousemove", "mousedown", "click", "scroll", "keypress"];

// // Timers
// let inactivityTimer; // Timer for inactivity
// let sessionTimer;    // Timer for the 5-minute session limit

// // Inactivity timeout duration (10 seconds for demo purposes)
// const inactivityTimeout = 10000; // 60 seconds

// // Session timeout duration (5 minutes = 300,000 ms)
// const sessionTimeout = 300000; // 5 minutes

// // Function to handle the inactivity timer
// const handleInactivityTimer = () => {
//     inactivityTimer = setTimeout(() => {
//         // Clear the existing timer
//         resetInactivityTimer();

//         // Remove event listeners to clean up
//         events.forEach((event) => {
//             window.removeEventListener(event, resetAndStartInactivityTimer);
//         });

//         // Log out the user due to inactivity
//         logoutAction("You were logged out due to inactivity.");
//     }, inactivityTimeout);
// };

// // Function to reset the inactivity timer
// const resetInactivityTimer = () => {
//     if (inactivityTimer) clearTimeout(inactivityTimer);
// };

// // Function to reset and restart the inactivity timer
// const resetAndStartInactivityTimer = () => {
//     resetInactivityTimer();
//     handleInactivityTimer();
// };

// // Function to handle the session timer
// const handleSessionTimer = () => {
//     sessionTimer = setTimeout(() => {
//         // Clear the inactivity timer
//         resetInactivityTimer();

//         // Remove event listeners
//         events.forEach((event) => {
//             window.removeEventListener(event, resetAndStartInactivityTimer);
//         });

//         // Log out the user due to session expiration
//         logoutAction("Your session has expired. Please log in again.");
//     }, sessionTimeout);
// };

// // Function to log out the user
// const logoutAction = (message) => {

//     // Show an alert to the user
//     alert(message);

//     // Redirect to login page
//     window.location.href = "login.html";
// };

// // Attach event listeners to monitor user activity
// events.forEach((event) => {
//     window.addEventListener(event, resetAndStartInactivityTimer);
// });

// // Start the timers when the page loads
// handleInactivityTimer(); // Start inactivity timer
// handleSessionTimer();    // Start session timer
