//Task 2: Adding Risk Items Dynamically
// Wait for the page to fully load before running any JavaScript
document.addEventListener("DOMContentLoaded", function () {
    console.log("Risk Dashboard Loaded");

    // Select the risk dashboard container
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskBtn = document.getElementById("increaseRiskBtn");

    // Function to add a new risk card to the dashboard
    function addRiskItem(riskName, riskLevel, department) {
        let riskCard = document.createElement("div");
        riskCard.classList.add("riskCard", riskLevel.toLowerCase()); // Add risk level class for styling

        // Create the risk card content
        riskCard.innerHTML = `
            <strong>Risk:</strong> ${riskName} <br>
            <strong>Level:</strong> ${riskLevel} <br>
            <strong>Department:</strong> ${department} <br>
            <button class="resolveBtn">Resolve</button>
        `;