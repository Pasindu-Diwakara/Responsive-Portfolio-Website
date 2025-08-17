const words = [
  "UI/UX Designer",
  "Web Developer",
  "Graphic Artist",
  "Brand Creator",
  "Visual Thinker"
];

let i = 0; // index of current word
const textSpan = document.getElementById("animated-text");

function typeWord(word, callback) {
  let index = 0;
  const interval = setInterval(() => {
    textSpan.textContent += word[index];
    index++;
    if (index === word.length) {
      clearInterval(interval);
      setTimeout(callback, 1500); // wait before deleting
    }
  }, 100);
}

function deleteWord(callback) {
  const interval = setInterval(() => {
    textSpan.textContent = textSpan.textContent.slice(0, -1);
    if (textSpan.textContent.length === 0) {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

function loop() {
  typeWord(words[i], () => {
    deleteWord(() => {
      i = (i + 1) % words.length; // loop through words
      loop();
    });
  });
}

loop();


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.onbeforematch(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')

            })
        }


    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}