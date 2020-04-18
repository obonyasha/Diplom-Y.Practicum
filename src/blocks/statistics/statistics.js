
/*google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density"],
    ["19, пн", 15],
    ["20, вт", 18],
    ["21, ср", 11],
    ["22, чт", 39],
    ["23, пт", 45],
    ["24, сб", 73],
    ["25, вс", 34]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
    calc: "stringify",
    sourceColumn: 1,
    type: "string",
    role: "annotation"
  }]);

  var options = {
    width: "100%",
    height: 668,
    bar: { groupWidth: "70%" },
    legend: { position: "none" },
    hAxis: {
      title: 'Кол-во упоминаний',
      titleTextStyle: {
        color: '#B6BCBF',
        fontName: 'Roboto',
        fontSize: '12',
        italic: 'false'
      },
      textStyle: {
        color: '#B6BCBF',
        fontName: 'Roboto',
        fontSize: '12'
          },
          baselineColor: '#1A1B22',
          gridlines: {count: '0'}
    },
    vAxis: {
      title: 'ДАТА (АВГУСТ)',
      titleTextStyle: {
        color: '#B6BCBF',
        fontName: 'Roboto',
        fontSize: '12',
        italic: 'false'
      },
      gridlines: {count: '0'},
      textStyle: {
        color: '#1A1B22',
        fontName: 'Roboto',
        fontSize: '12'
          }
    },
    tooltip: {trigger: 'none'}
      };

      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }



var ctx = document.getElementById('barchart_values').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['19, пн', '20, вт', '21, ср', '22, чт', '23, пт', '24, сб', '25, вс'],
        datasets: [{
            label: 'Кол-во упоминаний',
            data: [15, 18, 11, 39, 45, 73, 34],
            backgroundColor: '#2F71E5',
            borderWidth: 1,
            barThickness: 24,
            defaultFontColor: '#B6BCBF'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
    }
});*/


