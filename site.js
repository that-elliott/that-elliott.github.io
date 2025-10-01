document.addEventListener("DOMContentLoaded", function()
	{
	var hour = new Date().getHours();
	if (hour >= 8 && hour < 19) {
		document.body.classList.add("day");
	} else {
		document.body.classList.add("night");
	}
});

var audio = document.getElementById("bg-music");
function unmute() {
	audio.muted = false;
	document.removeEventListener("click", unmute);
	document.removeEventListener("keydown", unmute);
}
document.addEventListener("click", unmute);
document.addEventListener("keydown", unmute);
unmute();

$(function(){
  $("#nav").load("nav.html");
});