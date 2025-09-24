(function(){
	// Yandex.Metrika loader
	try {
		(function(m,e,t,r,i,k,a){
			m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();
			for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
			k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
		})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104263304', 'ym');
		window.ym && window.ym(104263304, 'init', { ssr:true, clickmap:true, ecommerce:'dataLayer', accurateTrackBounce:true, trackLinks:true });
	} catch(_) {}
})();

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

