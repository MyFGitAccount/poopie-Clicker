const poopBtn = document.getElementById("poop-btn");
const fartAudio = [
  new Audio("fart.flac"),
  new Audio("big-fart.flac")
];

let counter = 0;
let isShaking = false;
let t2 = 0;

function playAudio(index) {
  fartAudio[index].play();
}

function shake(t1) {
  const dt = t1 - t2;
  t2 = t1;
  if (isShaking) {
    const posx = Math.random() * 2 - 1 + 50;
    const posy = Math.random() * 2 - 1 + 50;
    poopBtn.style.left = `${posx}%`;
    poopBtn.style.top = `${posy}%`;
    requestAnimationFrame(shake);
  } else {
    poopBtn.style.left = "50%";
    poopBtn.style.top = "50%";
  }
}

function displayTextAndPlayAudio(btn, Counter, lower, upper, text, audioIndex) {
  if (Counter > lower && Counter <= upper) {
    isShaking = true;
    btn.innerText = text;
    requestAnimationFrame(shake);
    playAudio(audioIndex);
  } else {
    isShaking = false;
  }
}
let popupText=document.getElementById("popup");
poopBtn.addEventListener("click", () => {
  if(counter==5) popupText.style.visibility="visible";
  if(counter==30) return
  displayTextAndPlayAudio(poopBtn, counter, -1, 3, "Surprised!", 0);
  displayTextAndPlayAudio(poopBtn, counter, 4, 6, "Are you into that...", 0);
  displayTextAndPlayAudio(poopBtn, counter, 6, 10, "Keep going", 0);
  displayTextAndPlayAudio(poopBtn, counter, 10, 14, "You broke it", 1);
  displayTextAndPlayAudio(poopBtn, counter, 14,18, "Dude this is just a button",1);
  displayTextAndPlayAudio(poopBtn, counter, 18,22, "Having fun?",1);
  displayTextAndPlayAudio(poopBtn, counter, 22,28, "You are not getting anything from clicking this",1);
  displayTextAndPlayAudio(poopBtn, counter, 28,29, "Stop",1);
  popupText.innerText=`${counter}🍑💨`
  if(counter==29) return;
  counter++;
});
