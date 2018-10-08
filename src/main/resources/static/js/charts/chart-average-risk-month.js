$(document).ready(function() {
	var canvas = document.getElementById("canvas-average-risk-month");
	var ctx = canvas.getContext('2d');
	var hrefData = $(canvas).data('href');
	var timeFormat = 'YYYY[Q]Q';

	$.ajax({
		url : hrefData,
		datatype : 'JSON',
		contentType : "application/json; charset=utf-8",
		method : 'GET',
		success : function(data) {
			var labelsGraph = data.labels;
			var datasetsGraph = data.datasets;

			var data = {
				labels : labelsGraph,
				datasets : datasetsGraph
			};

			var averageRiskMonthChart = new Chart(ctx, {
				type : 'line',
				data : data,
				options : {
					scales : {
						xAxes : [{
							type: "time",
							time:{
								unit: 'quarter',
								format: timeFormat
								//tooltipFormat: 'MM/YYYY'
								//tooltipFormat: 'LL'
							}
						}],
						yAxes : [ {
							ticks : {
								max : 10,
								beginAtZero : true
							}
						} ]
					},
					layout : {
						padding : {
							left : 15
						}
					},
					plugins:{
						datalabels:{
							align: 'top',
							offset: 5
						}
					}
				}
			});
		},
		complete : function() {
			// console.log("completado");
		},
		error : function() {
			// console.log("erro");
		}
	});
});