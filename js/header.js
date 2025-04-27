const refs = {
  bodyEl: document.body,
  switchModeBtn: document.querySelector('.color-switch-btn'),
};

const setTheme = isDark => {
  refs.bodyEl.classList.toggle('dark-theme-on', isDark);
  refs.switchModeBtn.textContent = isDark ? 'light mode.' : 'dark mode.';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

setTheme(
  localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
);

refs.switchModeBtn.addEventListener('click', () =>
  setTheme(!refs.bodyEl.classList.contains('dark-theme-on'))
);
