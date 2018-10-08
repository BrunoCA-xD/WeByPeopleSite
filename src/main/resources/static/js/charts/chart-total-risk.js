$(document).ready(
		function() {
			var canvas = document.getElementById("canvas-total-risk");
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
					var dataGraph = json['data'];

					var myDoughnutChart = new Chart(ctx, {
						type : 'doughnut',
						data : {
							labels : labelsGraph,

							datasets : [ {
								backgroundColor : [ "rgba(208,127,0,1)",
										"rgba(0,163,255,1)" ],
								data : dataGraph

							} ]
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
