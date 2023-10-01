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





//-------------------Inner Grade Classification

// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// } 

//--------------------------------------- DROPDOWNQUESTION

