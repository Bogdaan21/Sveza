let sectionContact = document.getElementById("section-contact");
let heroButton = document.getElementById("btn-hero");
let items = document.querySelectorAll(".item");

console.log(items);

if (heroButton) {
  heroButton.addEventListener("click", () => {
    sectionContact.scrollIntoView();
  });
}
if (items) {
  [...items].forEach((item) => {
    item.addEventListener("click", (e) => {
      if (document.querySelector("li.active") !== null) {
        document.querySelector("li.active").classList.remove("active");
      }
      a = e.target;
      a.parentNode.classList.add("active");
    });
  });
}

//---------------- 06/07 tab excellence


document.addEventListener('DOMContentLoaded', function() {
  const tabTriggers = document.querySelectorAll('.excellence-tab-trigger');
  const tabContents = document.querySelectorAll('.excellence-tab-content');

  tabTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function() {
      // Skloni 'active' klasu sa svih tabova i dodaj je samo kliknutom tabu
      tabTriggers.forEach(tabTrigger => {
        tabTrigger.classList.remove('active');
      });
      trigger.classList.add('active');

      // Skloni 'flex' klasu sa svih tabova i dodaj je samo odgovarajućem tabu
      tabContents.forEach(content => {
        content.style.display = 'none';
      });
      tabContents[index].style.display = 'flex';
    });
  });
});


//---------------- 04/07 tab ourservice

document.addEventListener('DOMContentLoaded', function() {
  const tabTriggers = document.querySelectorAll('.ourservice-tab-trigger');
  const tabContents = document.querySelectorAll('.ourservice-tab-content');

  tabTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function() {
      // Skloni 'active' klasu sa svih tabova i dodaj je samo kliknutom tabu
      tabTriggers.forEach(tabTrigger => {
        tabTrigger.classList.remove('active');
      });
      trigger.classList.add('active');

      // Skloni 'active' klasu sa svih tabova i podesi ih na 'display: none;'
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Prikaži odgovarajući tab
      tabContents[index].classList.add('active');
    });
  });
});


//---------------- 03/07 tab baltic

document.addEventListener('DOMContentLoaded', function() {
  const tabTriggers = document.querySelectorAll('.baltic-tab-item');
  const tabContents = document.querySelectorAll('.baltic-tab-content');

  tabTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function() {
      // Skloni 'active' klasu sa svih tabova i dodaj je samo kliknutom tabu
      tabTriggers.forEach(tabTrigger => {
        tabTrigger.classList.remove('active');
      });
      trigger.classList.add('active');

      // Skloni 'active' klasu sa svih tabova i podesi ih na 'display: none;'
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Prikaži odgovarajući tab
      tabContents[index].classList.add('active');
    });
  });
});