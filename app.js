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
});