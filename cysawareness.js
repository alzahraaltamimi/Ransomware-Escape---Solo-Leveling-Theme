document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 60;
    const timerElement = document.getElementById("timer");
    const resultMessage = document.getElementById("result-message");
    const decryptBtn = document.getElementById("decrypt-btn");
    const hintBtn = document.getElementById("hint-btn");
    const hackBtn = document.getElementById("hack-btn");
    const payBtn = document.getElementById("pay-btn");
    const restartBtn = document.getElementById("restart-btn");
    const inputContainer = document.getElementById("input-container");
    const decryptionInput = document.getElementById("decryption-input");
    const submitDecrypt = document.getElementById("submit-decrypt");
    const hintContainer = document.getElementById("hint-container");

    let gameEnded = false; // Variable to track if the game has ended

    const countdown = setInterval(() => {
        if (timeLeft > 0 && !gameEnded) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else if (!gameEnded) {
            clearInterval(countdown);
            endGame("💀 Time’s up 💀<br> The hacker wiped your files!");
        }
    }, 1000);

    // Decrypt File Button Clicked
    decryptBtn.addEventListener("click", function () {
        if (!gameEnded) { // Only allow if the game is not over
            inputContainer.classList.remove("hidden"); // Show input container
            decryptionInput.focus(); // Focus on the input field
            submitDecrypt.disabled = false; // Enable the submit button
            hintContainer.classList.remove("hidden"); // Ensure hint container is visible
        }
    });

    // Submit Answer Button Clicked
    submitDecrypt.addEventListener("click", function () {
        if (!gameEnded) { // Only allow if the game is not over
            const userAnswer = decryptionInput.value.trim().toLowerCase();
            if (userAnswer === "solo leveling") {
                endGame("🎉 <span class='success-text'>You decrypted the files</span> 🎉<br><span class='success-text'> You are The Shadow Monarch of Cybersecurity</span>✨", true);
            } else {
                endGame("❌ <span class='error-text'>Wrong Answer</span> ❌<br> The ransomware wiped your files!", false, true);
            }
        }
    });

    // Hint Button Clicked
    hintBtn.addEventListener("click", function () {
        if (!gameEnded) { // Only allow if the game is not over
            hintContainer.classList.remove("hidden"); // Show hint
        }
    });

    // Counter-Hack Button Clicked
    hackBtn.addEventListener("click", function () {
        if (!gameEnded) { // Only allow if the game is not over
            endGame("⚠️ <span class='error-text'>Hack Failed</span> ⚠️<br>The hacker detected you and locked your files forever😞", false, true);
        }
    });

    // Pay Ransom Button Clicked
    payBtn.addEventListener("click", function () {
        if (!gameEnded) { // Only allow if the game is not over
            endGame("💸 You paid the ransom 💸<br> but the hacker vanished!");
        }
    });

    // Restart Button Clicked
    restartBtn.addEventListener("click", function () {
        location.reload();
    });

    // End the game with appropriate message
    function endGame(message, isSuccess = false, isError = false) {
        gameEnded = true; // Mark the game as ended
        clearInterval(countdown); // Stop the timer
        resultMessage.innerHTML = message;

        if (isSuccess) {
            resultMessage.classList.add("success");
        }

        // Hide all options after game ends
        document.querySelector(".options").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");

        // Disable submit button and hide the input container after game ends
        submitDecrypt.disabled = true;
        inputContainer.classList.add("hidden"); // Hide the input container
        decryptionInput.disabled = true; // Disable input to prevent further interaction

        // Hide the hint text as well when the game ends
        hintContainer.classList.add("hidden"); // Hide the hint container
    }
});
