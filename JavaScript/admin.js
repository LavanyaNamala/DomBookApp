
// admin.js (Admin Page)
document.addEventListener("DOMContentLoaded", function() {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    if (!loginData || loginData.role !== "admin") {
        alert("Admin Not Logged In.");
        window.location.href = "index.html"; // Redirect to home page if not logged in as admin
    }

    // Add book functionality
    const form = document.getElementById("addBookForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;

        const newBook = { title, author, category, isAvailable: true };
        console.log(newBook); // You can replace this with an actual API call to add the book

        alert("Book Added Successfully.");
    });
});




