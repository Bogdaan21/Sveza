// Postavljamo početno stanje - samo prvi paragraf je vidljiv
var paragraphs = document.querySelectorAll('.change-text');
paragraphs[0].classList.add('show-paragraph');

function showParagraph(index) {
  // Sakrivamo sve paragrafe
  paragraphs.forEach(function(p) {
    p.classList.remove('show-paragraph');
  });
  
  // Prikažemo odabrani paragraf
  paragraphs[index].classList.add('show-paragraph');
}
