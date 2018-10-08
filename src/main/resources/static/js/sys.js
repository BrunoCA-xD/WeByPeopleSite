/* Função para exibir o GIF do loader */
function showGifLoader() {
	console.log('showGif');
	$(".loader").css({
		display : "block"
	});
}
/* Função para ocultar o GIF do loader */
function hideGifLoader() {
	console.log('hideGif');
	$(".loader").css({
		display : "none"
	});
}
$(function() {
	
	$('.js-btnSearch').on('click', function(event) {

		var search = document.getElementById('txtSearch').value;
		var form = document.getElementById('searchform');
		console.log(search);

		var action = form.dataset.url;
		if (!action.endsWith('/')) {
			action += '/';
		}
		form.action = action + search;
	});
});
