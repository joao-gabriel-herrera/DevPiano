const keys = document.querySelectorAll(".key");
const check = document.querySelector(".show_keys");
const keysSection = document.querySelector(".piano_keys");
const switcher = document.querySelector(".switch");

const playNote = (nota) => {
  const audio = new Audio(`../songs/${nota}.wav`);
  audio.volume = 0.25;
  audio.play();
};

const mouseDown = (key) => {
  playNote(key.getAttribute("data-song"));
  if (key.className.includes("key_black")) {
    key.classList.add("black_pressed");
    return;
  }
  key.classList.add("white_pressed");
};
const mouseUp = (key) => {
  if (key.className.includes("key_black")) {
    key.classList.remove("black_pressed");
    return;
  }
  key.classList.remove("white_pressed");
};
keys.forEach((key) => {
  key.addEventListener("mousedown", () => mouseDown(key));
  key.addEventListener("mouseup", () => mouseUp(key));
});

check.addEventListener("change", ({ target }) => {
  if (target.checked == true) {
    keysSection.classList.remove("unshow_keys");
    switcher.classList.add("switch_active");
    return;
  }
  keysSection.classList.add("unshow_keys");
  switcher.classList.remove("switch_active");
});

const keyDownMap = {
  "\\": () => mouseDown(keys[0]),
  a: () => mouseDown(keys[1]),
  z: () => mouseDown(keys[2]),
  s: () => mouseDown(keys[3]),
  x: () => mouseDown(keys[4]),
  c: () => mouseDown(keys[5]),
  f: () => mouseDown(keys[6]),
  v: () => mouseDown(keys[7]),
  g: () => mouseDown(keys[8]),
  b: () => mouseDown(keys[9]),
  h: () => mouseDown(keys[10]),
  n: () => mouseDown(keys[11]),
  m: () => mouseDown(keys[12]),
  k: () => mouseDown(keys[13]),
  ",": () => mouseDown(keys[14]),
  l: () => mouseDown(keys[15]),
  ".": () => mouseDown(keys[16]),
  ";": () => mouseDown(keys[17]),
  ç: () => mouseDown(keys[18]),
  "/": () => mouseDown(keys[19]),
  Dead: () => mouseDown(keys[20]),
  Shift: () => mouseDown(keys[21]),
  "]": () => mouseDown(keys[22]),
  Control: () => mouseDown(keys[23]),
};
const keyUpMap = {
  "\\": () => mouseUp(keys[0]),
  a: () => mouseUp(keys[1]),
  z: () => mouseUp(keys[2]),
  s: () => mouseUp(keys[3]),
  x: () => mouseUp(keys[4]),
  c: () => mouseUp(keys[5]),
  f: () => mouseUp(keys[6]),
  v: () => mouseUp(keys[7]),
  g: () => mouseUp(keys[8]),
  b: () => mouseUp(keys[9]),
  h: () => mouseUp(keys[10]),
  n: () => mouseUp(keys[11]),
  m: () => mouseUp(keys[12]),
  k: () => mouseUp(keys[13]),
  ",": () => mouseUp(keys[14]),
  l: () => mouseUp(keys[15]),
  ".": () => mouseUp(keys[16]),
  ";": () => mouseUp(keys[17]),
  ç: () => mouseUp(keys[18]),
  "/": () => mouseUp(keys[19]),
  Dead: () => mouseUp(keys[20]),
  Shift: () => mouseUp(keys[21]),
  "]": () => mouseUp(keys[22]),
  Control: () => mouseUp(keys[23]),
};
document.addEventListener("keydown", (event) => {
  keyDownMap[event.key]();
});
document.addEventListener("keyup", (event) => {
  keyUpMap[event.key]();
});
