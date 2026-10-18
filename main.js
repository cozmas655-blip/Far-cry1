// Far Cry 6 site — main.js
// Vanilla JS: mobile nav toggle

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute(
        'aria-expanded',
        links.classList.contains('open') ? 'true' : 'false'
      );
    });

    // Close menu when a link is tapped (mobile UX)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
