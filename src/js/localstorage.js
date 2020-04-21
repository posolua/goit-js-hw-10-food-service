const refs = {
  body: document.querySelector('body'),
  switchInput: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',

  current() {
    if (localStorage.getItem('theme')) {
      localStorage.getItem('theme') === this.DARK
        ? (this.set(true), (refs.switchInput.checked = true))
        : this.set(false);
    }
  },

  set(checked) {
    checked ? this.change(this.LIGHT, this.DARK) : this.change();
  },

  change(oldTheme = this.DARK, newTheme = this.LIGHT) {
    refs.body.classList.contains(oldTheme)
      ? refs.body.classList.replace(oldTheme, newTheme)
      : refs.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  },
};

Theme.current();

refs.switchInput.addEventListener('change', onCheked);

function onCheked(event) {
  Theme.set(event.target.checked);
}
