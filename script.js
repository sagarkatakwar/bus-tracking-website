function redirect() {
  var busNumber = document.getElementById("bus-number").value.trim();
  if(busNumber !== "") {
    // Assuming the bus pages follow the naming convention: bus-<number>.html
    window.location.href = "bus-" + busNumber + ".html";
  } else {
    alert("Please enter a valid bus number.");
  }
}
