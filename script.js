const openMenuButton = document.getElementById("menuButton");
const contactButton = document.getElementById("contactButton");
const getTouchButton = document.getElementById("touchButton");

openMenuButton.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
});

// contact me button function

contactButton.addEventListener("click", () => {
  const email = "taofique9014@gmail.com";
  const subject = encodeURIComponent("Let's Connect!");

  // Prompt the user for a custom message
  let userMessage = prompt("Enter your message to Taofique:");

  // Default message if the user cancels or leaves the prompt empty
  if (userMessage === null || userMessage.trim() === "") {
    userMessage = "Hi Taofique,\n\nI would love to get in touch with you.";
  } else {
    userMessage = `Hi Taofique,\n\n${userMessage}`;
  }

  // Encode the message and open email client
  const body = encodeURIComponent(userMessage);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

// get in touch button function

getTouchButton.addEventListener("click", () => {
  const email = "taofique9014@gmail.com";
  const subject = encodeURIComponent("Let's Connect!");

  // Prompt the user for a custom message
  let userMessage = prompt("Enter your message to Taofique:");

  // Default message if the user cancels or leaves the prompt empty
  if (userMessage === null || userMessage.trim() === "") {
    userMessage = "Hi Taofique,\n\nI would love to get in touch with you.";
  } else {
    userMessage = `Hi Taofique,\n\n${userMessage}`;
  }

  // Encode the message and open email client
  const body = encodeURIComponent(userMessage);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
