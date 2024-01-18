// write js code here if required
// Function to update the timer
    function updateTimer() {
      // Get the current date and time
      const now = new Date();

      // Extract date and time components
      const day = now.getDate();
      const month = now.getMonth() + 1; // Months are zero-based, so add 1
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format the timer string
      const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

      // Update the content of the <p> tag
      document.getElementById('timer').innerText = timerString;
    }

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();