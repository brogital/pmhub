(function(){
	// Mobile nav toggle
	var nav = document.getElementById('site-nav');
	var toggle = document.querySelector('.nav-toggle');
	if (toggle && nav) {
		toggle.addEventListener('click', function(){
			var isOpen = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', String(isOpen));
		});
	}
	// Footer year
	var y = document.getElementById('year');
	if (y) y.textContent = String(new Date().getFullYear());
	// Lead forms
	document.addEventListener('submit', function(e){
		var form = e.target;
		if (form && form.matches('[data-lead-form]')) {
			e.preventDefault();
			alert('ой еще не работает');
		}
	});
})();

