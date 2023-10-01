var dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var dropdownContainer = this.nextElementSibling;
    var isExpanded = this.getAttribute('aria-expanded') === 'true';

    // Zatvori sve druge dropdown menije
    dropdownButtons.forEach(function(dropdown) {
      if (dropdown !== button) {
        dropdown.setAttribute('aria-expanded', 'false');
        dropdown.nextElementSibling.style.display = 'none';
      }
    });

    // Otvori ili zatvori kliknuti dropdown meni
    if (isExpanded) {
      this.setAttribute('aria-expanded', 'false');
      dropdownContainer.style.display = 'none';
    } else {
      this.setAttribute('aria-expanded', 'true');
      dropdownContainer.style.display = 'block';
    }
  });
});
