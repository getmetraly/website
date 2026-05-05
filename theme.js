// Metraly shared theme system
(function() {
  var STORAGE_KEY = 'metraly-theme';

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Update all toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.querySelector('.theme-icon-sun') && (btn.querySelector('.theme-icon-sun').style.display = theme === 'dark' ? 'block' : 'none');
      btn.querySelector('.theme-icon-moon') && (btn.querySelector('.theme-icon-moon').style.display = theme === 'dark' ? 'none' : 'block');
    });
  }

  function toggle() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    apply(current === 'dark' ? 'light' : 'dark');
  }

  // Apply immediately to avoid flash
  apply(getPreferred());

  window.MetralyTheme = { apply: apply, toggle: toggle, get: function() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }};
})();
