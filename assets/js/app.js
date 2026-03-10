const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.menu a, .mobile-panel a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === id);
      });
    });
  }, { threshold: 0.45 });

  sections.forEach((section) => navObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const mobileToggle = document.getElementById('mobileToggle');
  const mobilePanel = document.getElementById('mobilePanel');

  mobileToggle?.addEventListener('click', () => mobilePanel.classList.toggle('open'));
  mobilePanel?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobilePanel.classList.remove('open'));
  });