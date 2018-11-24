(function () {

  const navigationButton = document.getElementById('nav-toggle');
  const navigationClose = document.getElementById('navigation-close');
  const navigation = document.getElementById('navigation');

  navigationButton.addEventListener('click', () => {
    navigation.classList.add('is-open');
  });

  navigationClose.addEventListener('click', () => {
    navigation.classList.remove('is-open');
  });

}());
