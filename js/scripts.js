var button_search = document.querySelector(".search__btn");
var popup = document.querySelector(".form-search");

button_search.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("js-form-search");
});


