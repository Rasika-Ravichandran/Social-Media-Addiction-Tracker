let totalMinutes = 0;

document.getElementById("trackerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const platform = document.getElementById("platform").value;
    const timeSpent = parseInt(document.getElementById("timeSpent").value);

    if (platform && timeSpent > 0) {
        const li = document.createElement("li");
        li.textContent = `${platform} - ${timeSpent} minutes`;
        document.getElementById("usageList").appendChild(li);

        totalMinutes += timeSpent;
        document.getElementById("totalTime").textContent = `Total Time: ${totalMinutes} minutes`;

        // Suggestion
        const suggestion = document.getElementById("suggestion");
        if (totalMinutes > 180) {
            suggestion.textContent = "⚠️ You've spent over 3 hours today! Try reading a book or going for a walk.";
            suggestion.style.color = "red";
        } else {
            suggestion.textContent = "";
        }

        // Clear inputs
        document.getElementById("platform").value = "";
        document.getElementById("timeSpent").value = "";
    }
});
