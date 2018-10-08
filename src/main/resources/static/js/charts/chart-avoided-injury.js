var ctx = document.getElementById("canvas-avoided-injury").getContext(
		'2d');

var data = {
	labels : [ "Julho", "Agosto", "Setembro", "Outubro" ],
	datasets : [ {
		label : "Implementados",
		backgroundColor : "rgba(0,163,255,1)",
		data : [ 10, 4, 3, 2 ]
	}, {
		label : "Sugeridos",
		backgroundColor : "rgba(208,127,0,1)",
		data : [ 13, 2, 2, 1 ]
	} ]
};

var implementedControlsChart = new Chart(ctx, {
	type : 'bar',
	data : data,
});