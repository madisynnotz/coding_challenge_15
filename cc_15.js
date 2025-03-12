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
    

        // Task 3: Removing Risk Items
        // Add event listener to remove the risk card when "Resolve" is clicked
        riskCard.querySelector(".resolveBtn").addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event bubbling issues
            riskDashboard.removeChild(riskCard); // Remove the risk card
        });

        // Append the new risk card to the dashboard
        riskDashboard.appendChild(riskCard);
    }

    // Task 4: Categorizing Risks by Level
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

    // Task 5: Implementing Bulk Updates
    // Function to increase risk levels across all risks
    increaseRiskBtn.addEventListener("click", function () {
        document.querySelectorAll(".riskCard").forEach((card) => {
            let levelElement = card.querySelector("strong:nth-child(2)"); // Get the risk level
            let currentLevel = levelElement.innerHTML.split(": ")[1]; // Extract level text

            // Increase risk level
            if (currentLevel === "Low") {
                levelElement.innerHTML = `<strong>Level:</strong> Medium`;
                card.classList.remove("low");
                card.classList.add("medium");
            } else if (currentLevel === "Medium") {
                levelElement.innerHTML = `<strong>Level:</strong> High`;
                card.classList.remove("medium");
                card.classList.add("high");
            }
        });
    });

    // ✅ Task 6: Handling Event Propagation
    // Prevent unintended clicks on the dashboard from affecting risk cards
    riskDashboard.addEventListener("click", function (event) {
        console.log("Dashboard clicked"); // This should only fire if the dashboard is clicked directly
    });
});