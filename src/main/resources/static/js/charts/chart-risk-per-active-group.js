$(document).ready(
		function() {
			
			var barOptions_stacked = {
				tooltips : {
					enabled : false
				},
				hover : {
					animationDuration : 2
				},
				scales : {
					xAxes : [ {
						ticks : {
							beginAtZero : true,
							fontFamily : "'Open Sans Bold', sans-serif",
							fontSize : 11
						},
						scaleLabel : {
							display : false
						},
						gridLines : {},
						stacked : true
					} ],
					yAxes : [ {
						gridLines : {
							display : false,
							color : "#fff",
							zeroLineColor : "#fff",
							zeroLineWidth : 0
						},
						ticks : {
							fontFamily : "'Open Sans Bold', sans-serif",
							fontSize : 11
						},
						stacked : true
					} ]
				},
				legend : {
					display : true
				},

				animation : {
					onComplete : function() {
						var chartInstance = this.chart;
						var ctx = chartInstance.ctx;
						ctx.textAlign = "left";
						ctx.font = "9px Open Sans";
						ctx.fillStyle = "#fff";

						Chart.helpers.each(this.data.datasets.forEach(function(
								dataset, i) {
							var meta = chartInstance.controller
									.getDatasetMeta(i);
							Chart.helpers.each(meta.data.forEach(function(bar,
									index) {
								data = dataset.data[index];
								if (i == 0) {
									ctx.fillText(data, 50, bar._model.y + 4);
								} else {
									ctx.fillText(data, bar._model.x - 25,
											bar._model.y + 4);
								}
							}), this)
						}), this);
					}
				},
				pointLabelFontFamily : "Quadon Extra Bold",
				scaleFontFamily : "Quadon Extra Bold",
			};

			var canvas = document.getElementById("canvas-risk-per-active-group");
			var ctx = canvas.getContext('2d');
			var hrefData = $(canvas).data('href');

			$.ajax({
				url : hrefData,
				method : 'GET',
				success : function(data) {
					var labelsGraph = data.labels;
					var datasetsGraph = data.datasets;

					var data = {
						labels : labelsGraph,
						datasets : datasetsGraph
					};

					var riskPerActiveGroupChart = new Chart(ctx, {
						type : 'horizontalBar',
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
							tooltips:{
								mode:'nearest'
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