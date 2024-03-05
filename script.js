/* 			ROLAGEM			 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();

	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });

// CONTATO

document.getElementById('emailButton').addEventListener('click', function(){
	window.location.href = 'mailto:codeinx.work@gmail.com';
});

document.getElementById('whatsappButton').addEventListener('click', function(){
	window.location.href = 'https://wa.link/ytownh';
});