$(document).ready(
		function() {
			var canvas = document.getElementById("canvas-average-risk-per-active-group");
			var ctx = canvas.getContext('2d');
			var hrefData = $(canvas).data('href');

			$.ajax({
				url : hrefData,
				datatype : 'JSON',
				contentType : "application/json; charset=utf-8",
				method : 'GET',
				success : function(data) {
					var labelsGraph = data.labels;
					var datasetsGraph = data.datasets;
					
					var myRadarChart = new Chart(ctx, {
						type : 'radar',
						data : {
							labels : labelsGraph,
							datasets : datasetsGraph
						},
						options:{
							plugins:{
								datalabels:{
									align: 'start',
									offset: 6
								}
							}
						}
					});
					
				},
				complete : function() {
					//console.log("completado");
				},
				error : function() {
					//console.log("erro");
				}
			});
		});