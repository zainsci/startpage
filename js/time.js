window.onload = displayClock();
function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();

  document.getElementById("time").innerText = d.toLocaleTimeString();

  document.getElementById("month").innerText = mm;
  document.getElementById("day").innerText = dd;

  setTimeout(displayClock, 1000);
}
