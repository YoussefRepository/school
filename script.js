const paragraph = document.getElementById('paragraph');
const words = paragraph.innerHTML.split(' ');

paragraph.innerHTML = words.map((word) => {
  return `<span class="word">${word}</span>`;
}).join(' ');

const wordSpans = document.querySelectorAll('.word');

wordSpans.forEach((word) => {
  word.addEventListener('mouseenter', function() {
    this.classList.add('highlight');
  });

  word.addEventListener('mouseleave', function() {
    this.classList.remove('highlight');
  });
});