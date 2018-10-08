$(document).ready(
		function() {
			var canvas = document.getElementById("canvas-total-accepted-risk");
			var ctx = canvas.getContext('2d');
			var hrefData = $(canvas).data('href');

			$.ajax({
				url : hrefData,
				datatype : 'JSON',
				contentType : "application/json; charset=utf-8",
				method : 'GET',
				success : function(data) {
					var json = JSON.parse(data);
					var labelsGraph = json['labels'];
					var datasetsGraph = json['datasets'];
					
					var myDoughnutAcceptedRiskChart = new Chart(ctx, {
						type : 'doughnut',
						data : {
							labels : labelsGraph,
							datasets : datasetsGraph
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