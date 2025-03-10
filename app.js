document.addEventListener("DOMContentLoaded", () => {
    console.log("MendMeal Frontend Loaded!");

    // Example: Fetch recipes from backend (Replace with your actual backend URL)
    fetch("https://mendmeal-backend.onrender.com/api/recipes")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Recipes:", data);
            // Here, you can display the recipes on the page
        })
        .catch(error => console.error("Error fetching recipes:", error));
    if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
            .then(reg => console.log("Service Worker Registered!", reg))
            .catch(err => console.log("Service Worker Registration Failed!", err));
    });
}

});
