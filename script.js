function trackBus() {
    const busNumber = document.getElementById('busNumber').value;
    const statusDiv = document.getElementById('status');

    // Simulate a bus tracking status (you can replace this with real API calls)
    if (busNumber) {
        statusDiv.innerHTML = `Tracking status for bus number: <strong>${busNumber}</strong><br>Bus is on its way!`;
    } else {
        statusDiv.innerHTML = 'Please enter a bus number.';
    }
}
