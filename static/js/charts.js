google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

  /* Line Chart */
  var data = google.visualization.arrayToDataTable([
    ['Día', 'Mes anterior', 'Mes actual'],
    ['05',  900,1000],
    ['13',  970,1170],
    ['14',  860,660],
    ['15',  930,830],
    ['22',  940,1040],
    ['28',  840,940],
  ]);
  var options = {
    title: 'Consumo del mes',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  var chart = new google.visualization.LineChart(document.getElementById('curvecharts'));
  chart.draw(data, options);


  /* Piechart */
  var data = google.visualization.arrayToDataTable([
    ['Distribución', 'Consumo'],
    ['Sala',     11],
    ['Cuarto principal',      2],
    ['Lavandero',  2],
    ['Cocina', 2]
  ]);
  var options = {
    title: 'Distribución de consumo'
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);


  /* Column Chart  */
  var data = google.visualization.arrayToDataTable([
     ['Hora', 'Consumo', { role: 'style' }],
     ['6:00am', 19.30, 'gold'],
     ['5:00pm', 8.94, '#b87333'],            // RGB value
     ['10:00pm', 10.49, 'silver'],            // English color name
  ]);
  var options = {
    title: 'Horas de mayor consumo'
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart"));
  chart.draw(data, options);

}
