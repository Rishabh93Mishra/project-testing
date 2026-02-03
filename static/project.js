function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  if (email === "test@gmail.com" && password === "1234") {
    msg.style.color = "green";
    msg.innerText = "Login successful!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid credentials!";
  }
}
