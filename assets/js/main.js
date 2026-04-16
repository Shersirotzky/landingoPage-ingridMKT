(function () {
  const navbar = document.getElementById('navbar');
  const reveals = document.querySelectorAll('.reveal');
  const formLinks = document.querySelectorAll('.js-form-link');
  const googleFormUrl = window.APP_CONFIG?.googleFormUrl || '#';

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('visible'));
  }

  formLinks.forEach((link) => {
    if (googleFormUrl && googleFormUrl !== '#') {
      link.href = googleFormUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = '#contact';
      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Cole o link do Google Forms em assets/js/config.js para ativar este botão.');
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
})();
