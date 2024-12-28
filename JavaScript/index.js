






// index.js (Login Page)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "admin@empher.com" && password === "empher@123") {
            localStorage.setItem("loginData", JSON.stringify({ role: "admin", email }));
            alert("Logged in as Admin.");
            window.location.href = "admin.html"; // Redirect to admin page
        } else if (email === "user@empher.com" && password === "user@123") {
            localStorage.setItem("loginData", JSON.stringify({ role: "user", email }));
            alert("Logged in as User.");
            window.location.href = "books.html"; // Redirect to books page
        } else {
            errorMessage.style.display = "block"; // Show error message
        }
    });
});























document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "admin@empher.com" && password === "empher@123") {
      localStorage.setItem("loginData", JSON.stringify({ role: "admin", email }));
      alert("Logged as Admin.");
      window.location.href = "admin.html";
    } else if (email === "user@empher.com" && password === "user@123") {
      localStorage.setItem("loginData", JSON.stringify({ role: "user", email }));
      alert("Logged in as User.");
      window.location.href = "books.html";
    } else {
      document.getElementById("errorMessage").style.display = "block";
    }
  });
  const loginData = JSON.parse(localStorage.getItem("loginData"));

if (!loginData || loginData.email !== "admin@empher.com") {
  alert("Admin Not Logged In.");
  window.location.href = "index.html";
}

document.getElementById("addBookForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const book = {
    title,
    author,
    category,
    isAvailable: true,
    isVerified: false,
    borrowedDays: null,
    imageurl: "https://m.media-amazon.com/images/I/712818P3InL.SY522.jpg",
  };

  fetch("https://<your-json-server-url>/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  })
    .then(() => alert("Book Added Successfully"))
    .catch(() => alert("Failed to Add Book"));
});