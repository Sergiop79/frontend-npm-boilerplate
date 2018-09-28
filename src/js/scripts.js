(function (c) {

  const showMessage = () => c('Babel works');
  
  showMessage()

  // navigation
  const navigationButton = document.getElementById('nav-toggle')
  const navigation = document.getElementById('navigation')

  const toggleNavigationButton = (e) => {
    e.preventDefault();
    if (navigationButton.classList.contains('is-open')) {
      navigationButton.classList.remove('is-open')
    } else {
      navigationButton.classList.add('is-open')
    }
  }

  const toggleNavigation = (e) => {
    if (navigation.classList.contains('is-open')) {
      navigation.classList.remove('is-open')
    } else {
      navigation.classList.add('is-open')
    }
  }

  navigationButton.addEventListener('click', toggleNavigationButton)
  navigationButton.addEventListener('click', toggleNavigation)


}(console.log));

