async function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.status === "success") {
      msg.style.color = "green";
      msg.innerHTML = "Login successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } else {
      msg.style.color = "red";
      msg.innerHTML = "Invalid email or password!";
    }
  } catch (err) {
    msg.style.color = "red";
    msg.innerHTML = "Server error. Try again.";
  }
}
