$(function() {
	$("#hamburger").on("click", function(e) {
		e.preventDefault();
		$("#nav").show();
	});
	$("#close-nav").on("click", function(e) {
		e.preventDefault();
		$("#nav").hide();
	});
});
