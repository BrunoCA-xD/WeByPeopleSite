$(document).ready(function() {
	var canvas = document.getElementById("canvas-implemented-controls");
	var ctx = canvas.getContext('2d');
	var hrefData = $(canvas).data('href');
	var timeFormat = 'YYYY-MM';

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

			var implementedControlsChart = new Chart(ctx, {
				type : 'bar',
				data : data,
				options : {
					scales : {
						xAxes : [ {
							stacked : true
						} ],
						yAxes : [ {
							stacked : true
						} ]
					},
					plugins:{
						datalabels:{
							align: 'center',
							font: {
								size: 14
							},
							display:function(context){
								var index = context.dataIndex;
							    var value = context.dataset.data[index];
								return value!=0;
							}
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