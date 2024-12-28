// books.js (User Page)
document.addEventListener("DOMContentLoaded", function() {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    if (!loginData || loginData.role !== "user") {
        alert("User Not Logged In.");
        window.location.href = "index.html"; // Redirect to login page if not logged in as user
    }

    const books = [
        { id: 1, title: "Book 1", author: "Author 1", isAvailable: true },
        { id: 2, title: "Book 2", author: "Author 2", isAvailable: true },
    ];

    // Display books
    const bookContainer = document.getElementById("book-container");
    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Status: ${book.isAvailable ? "Available" : "Not Available"}</p>
            <button class="borrow-btn" data-id="${book.id}">Borrow Book</button>
        `;
        bookContainer.appendChild(bookCard);
    });

    // Handle borrowing books
    document.querySelectorAll(".borrow-btn").forEach(button => {
        button.addEventListener("click", function() {
            const bookId = button.getAttribute("data-id");
            alert(Book ${bookId} borrowed successfully!);
        });
    });
});