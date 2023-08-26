document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("login-section");
    const chatSection = document.getElementById("chat-section");
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");
    const logoutButton = document.getElementById("logout-button");
  
    let username = "";
  
    // Function to toggle login and chat sections
    function toggleSections() {
      loginSection.classList.toggle("hidden");
      chatSection.classList.toggle("hidden");
    }
  
    // Login button click event
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", () => {
      username = document.getElementById("username").value;
      toggleSections();
    });
  
    // Send button click event
    sendButton.addEventListener("click", () => {
      const message = chatInput.value;
      if (message) {
        chatBox.innerHTML += `<p>${username}: ${message}</p>`;
        chatInput.value = "";
      }
    });
  
    // Logout button click event
    logoutButton.addEventListener("click", () => {
      toggleSections();
      chatBox.innerHTML = "";
      username = "";
    });
  });