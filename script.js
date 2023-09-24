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

const left = document.getElementById("left");
const right = document.getElementById("right");
const element = document.getElementById("element");

const ch1 = document.getElementById("ch1")
const ch2 = document.querySelector(".ch2")
const ch3 = document.getElementById("ch3")
const ch4 = document.getElementById("ch4")
const ch5 = document.getElementById("ch5")
const ch6 = document.getElementById("ch6")

left.addEventListener("click", (e) => {
  element.classList.add("left")
  ch1.innerText = "They mentioned the history of Saudi Arabia";
  ch1.dataset.name = "They mentioned the history of Saudi Arabia"
  // 
  ch2.innerText = "Homeland is not just a word that rolls on the tongue and then we forget. Rather, it is a word that comes from the heart that expresses the most precious thing a person has. This mixture of land, sky, trees, and some terrain is not only what expresses homeland. Rather, homeland is a plant whose roots extend into the soul and grow until it touches... the clouds.";
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
  //
  ch3.innerText = "The first word";
  ch4.innerText = "In the name of God, the Most Gracious, the Most Merciful, and may blessings and peace be upon the most honorable of creation and messengers, our master Muhammad. As for what follows, with the rising of the sun of a new day, we receive this anniversary of the Saudi National Day, which increases our belonging to this good, pure land, which we have known only as a land of goodness, security, and peace, and a land of blessings from God Almighty, God Almighty honored it by making it the Two Holy Mosques, and making it a cradle for the message of Islam, which was only revealed as a mercy to the worlds.";
  ch5.innerText = "The second word";
  ch6.innerText = "On this day in the year 1351 AH / 1932 AD, history recorded the birth of the Kingdom of Saudi Arabia after the epic heroism led by the founder, King Abdul Aziz bin Abdul Rahman Al Saud - may God have mercy on him - over a period of thirty-two years after he regained the city of Riyadh, the capital of the kingdom of his ancestors and fathers, on the fifth of The month of Shawwal 1319 AH corresponding to January 15, 1902 AD.";
})


right.addEventListener("click", (e) => {
  element.classList.remove("left")
  ch1.innerText = "ذكرا تاريخ السعودية";
  ch1.dataset.name = "ذكرا تاريخ السعودية"
  // 
  ch2.innerText = "ليس الوطن مجرد كلمة تجري على اللسان ثم ننساها، بل إنها كلمة تنبع من القلب تعبر عن أغلى ما يملك الإنسان، فهذا الخليط من الأرض والسماء والأشجار وبعض التضاريس ليس هو ما يعبر عن الوطن فقط، بل إن الوطن نبتة تمتد جذورها في الروح وتنمو حتى تلامس الغيوم.";
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
  //
  ch3.innerText = "الكلمة الاولى";
  ch4.innerText = "بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف الخلق والمرسلين سيدنا محمد، أما بعد، فإننا ومع إشراقة شمس يوم جديد نستقبل هذه الذكرى لليوم الوطني السعودي، الذي يزيد من انتمائنا لهذه الأرض الطيبة الطاهرة التي ما عهدناها إلا بلاد خير وأمان وسلام، وبلاد بركة من الله عز وجل، فقد كرمها الله عز وجل بأن جعل فيها الحرمين الشريفين، وأن جعلها مهدًا لرسالة الإسلام التي ما تنزلت إلا رحمة للعالمين.";
  ch5.innerText = "الكلمة الثانية";
  ch6.innerText = "في مثل هذا اليوم من عام 1351هـ / 1932م سجل التاريخ مولد المملكة العربية السعودية بعد ملحمة البطولة التي قادها المؤسس الملك عبد العزيز بن عبد الرحمن آل سعود - طيب الله ثراه - على مدى اثنين وثلاثين عاماً بعد استرداده لمدينة الرياض عاصمة ملك أجداده وآبائه في الخامس من شهر شوال عام 1319هـ الموافق 15 يناير 1902م.";
})