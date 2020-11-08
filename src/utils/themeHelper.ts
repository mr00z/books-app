import halfmoon from 'halfmoon/js/halfmoon-module';

export function setPreferredTheme() {
  if (halfmoon.getPreferredMode() == 'dark-mode') {
    halfmoon.toggleDarkMode();
  }
}
