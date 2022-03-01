 

var xValues = ['', '', '', '', '', '', '', '',];
var yValues = [50, 20, 25, 15, 15, 45, 90, 20];
var barColors = ["#00207D"];

new Chart("Students", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "World Wine Production 2018"
    }
  }
});


var xValues = ['', '', '', '', '', '', '', '',];
var yValues = [50, 20, 25, 15, 15, 45, 90, 20];
var barColors = ["#003642"];

new Chart("EarnedMonthly", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "World Wine Production 2018"
    }
  }
});



var xValues = ['', '', '', '', '', '', '', '',];
var yValues = [50, 20, 25, 15, 15, 45, 90, 20];
var barColors = ["#9C3636"];

new Chart("Student", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "World Wine Production 2018"
    }
  }
});

var xValues = ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var yValues = [800, 250, 950, 600, 200, 100, 50, 720, 350, 50, 150, 400, 720];

new Chart("YearlySales", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "white",
      borderColor: "#1179F0",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
