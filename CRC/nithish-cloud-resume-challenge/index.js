const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://grhjggxzxzabhea743n6qopho40fjhtx.lambda-url.ap-southeast-1.on.aws/");
        mode: 'no-cors'
        let data = await response.json();
        counter.innerHTML = `views: ${data}`;
    } catch (error) {
        console.error("Error updating counter:", error);
    }
}

// Call the function to execute it
updateCounter();

/**async function updateVisitCount() {
    try {
        // Fetch visit count data from the Lambda function URL
        let response = await fetch("https://grhjggxzxzabhea743n6qopho40fjhtx.lambda-url.ap-southeast-1.on.aws/");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        let data = await response.json();

        // Display the count on the webpage
        document.getElementById("visitCount").textContent = data.visitCount;
    } catch (error) {
        // Handle errors (e.g., network issues, server errors)
        console.error("Error updating visit count:", error);
        document.getElementById("visitCount").textContent = "Error loading data";
    }
}

// Call the function to update and display visit count
updateVisitCount();**/