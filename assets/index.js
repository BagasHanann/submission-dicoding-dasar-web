window.onscroll = function () {
	stickyNavbar();
};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function stickyNavbar() {
	window.scrollY >= sticky
		? navbar.classList.add('sticky')
		: navbar.classList.remove('sticky');
}

document.getElementById('navbarToggle').addEventListener('click', function () {
	const navList = document.getElementById('navList');
	navList.classList.toggle('show');
});
