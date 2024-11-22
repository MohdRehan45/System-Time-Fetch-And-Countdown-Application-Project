// Elements
    const fetchTimeBtn = document.getElementById('fetchTimeBtn');
    const startCountdownBtn = document.getElementById('startCountdownBtn');
    const timeDisplay = document.getElementById('timeDisplay');
    const countdownDisplay = document.getElementById('countdownDisplay');
    const errorDisplay = document.getElementById('errorDisplay');
    const countdownInput = document.getElementById('countdownInput');

    // Function to fetch and display the current time
    fetchTimeBtn.addEventListener('click', () => {
      const currentTime = new Date().toLocaleTimeString();
      timeDisplay.textContent = `Current Time: ${currentTime}`;
    });

    // Function to start the countdown
    startCountdownBtn.addEventListener('click', () => {
      const countdownTime = parseInt(countdownInput.value);

      // Error handling for invalid input
      if (isNaN(countdownTime) || countdownTime < 0) {
        errorDisplay.textContent = "Please enter a valid non-negative number.";
        return;
      }

      // Reset error and UI states
      errorDisplay.textContent = "";
      startCountdownBtn.disabled = true;
      fetchTimeBtn.disabled = true;
      countdownInput.disabled = true;
      countdownDisplay.textContent = `Countdown: ${countdownTime} seconds remaining`;

      // Countdown logic
      let remainingTime = countdownTime;
      const interval = setInterval(() => {
        remainingTime--;
        if (remainingTime >= 0) {
          countdownDisplay.textContent = `Countdown: ${remainingTime} seconds remaining`;
        } else {
          clearInterval(interval);
          countdownDisplay.textContent = "Countdown Completed!";
          startCountdownBtn.disabled = false;
          fetchTimeBtn.disabled = false;
          countdownInput.disabled = false;
        }
      }, 1000);
    });
