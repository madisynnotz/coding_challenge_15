//Task 1 : Basic set up
// Wait for the page to fully load before running any JavaScript
document.addEventListener("DOMContentLoaded", function () {
    console.log("Risk Dashboard Loaded");

    // Select the risk dashboard container
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskBtn = document.getElementById("increaseRiskBtn");

    //Task 2 - Adding Risk Items
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
        riskForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh on form submission
    
            // Get user inputs
            const riskName = document.getElementById("riskName").value.trim();
            const riskLevel = document.getElementById("riskLevel").value;
            const department = document.getElementById("department").value.trim();
    
            // Check if all fields are filled before adding the risk
            if (riskName && department) {
                addRiskItem(riskName, riskLevel, department);
                riskForm.reset(); // Clear form fields
            } else {
                alert("Please fill out all fields.");
            }
        });

        // Task 3: Removing Risk Items
        // Add event listener to remove the risk card when "Resolve" is clicked
        riskCard.querySelector(".resolveBtn").addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event bubbling issues
            riskDashboard.removeChild(riskCard); // Remove the risk card
        });

        // Append the new risk card to the dashboard
        riskDashboard.appendChild(riskCard);
    }