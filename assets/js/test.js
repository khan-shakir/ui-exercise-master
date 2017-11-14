$(document).ready(function () {
    $("#toggle-sidebar").click(function(e){
    	e.preventDefault();
         $("#sidebar").fadeToggle(500);
    });
});
