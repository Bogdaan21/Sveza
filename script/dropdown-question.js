var dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var dropdownContainer = this.nextElementSibling;
    var isExpanded = this.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      this.setAttribute('aria-expanded', 'false');
      dropdownContainer.classList.add('hidden-class');
      dropdownContainer.classList.remove('visible-class');
    } else {
      this.setAttribute('aria-expanded', 'true');
      dropdownContainer.classList.add('visible-class');
      dropdownContainer.classList.remove('hidden-class');
    }
  });
});
