document.addEventListener("DOMContentLoaded", function()
	{
	var hour = new Date().getHours();
	if (hour >= 8 && hour < 19) {
		document.body.classList.add("night");
	} else {
		document.body.classList.add("day");
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
//unmute();