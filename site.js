function autoScroll(scrollContent) {
    // check if reached the bottom
    if (scrollContent.scrollLeft >= scrollContent.scrollWidth - scrollContent.clientWidth) {
        // if at the bottom, jump back to the top
        scrollContent.scrollLeft = 0;
    } else {
        scrollContent.scrollLeft += 1; 
    }
}

function scrollAll() {
	var scrollContents = document.getElementsByClassName("scroll-content");

	for (var scrollContent in scrollContents) {
		autoScroll(scrollContent);
	}
}


setInterval(scrollAll, 50);