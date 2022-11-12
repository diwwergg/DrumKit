// Modify New Version code by Mr. Thawatchai B.

document.addEventListener(
  "keydown", (event) => {
    let id = event.key;
    console.log(keySwitch(id));
  }
);

document.addEventListener(
  "click", (event) => {
    let id = event.target.id;
    console.log(keySwitch(id));
  });

const keySwitch = (key) => {
  switch (key) {
    case "w": runFunctionDrum(key, keyList[key]); return "crash";
    case "a": runFunctionDrum(key, keyList[key]); return "kick-bass";
    case "s": runFunctionDrum(key, keyList[key]); return "snare";
    case "d": runFunctionDrum(key, keyList[key]); return "tom-1";
    case "j": runFunctionDrum(key, keyList[key]); return "tom-2";
    case "k": runFunctionDrum(key, keyList[key]); return "tom-3";
    case "l": runFunctionDrum(key, keyList[key]); return "tom-4";
    default: return "Not Config Key : " + key;
  }
};

const runFunctionDrum = (id, sound) => {
  document.getElementById(id).style.color = "#000";
  new Audio(sound).play();
  setTimeout(function () {
    document.getElementById(id).style.color = "#da0463";
  }, 200);

}

const keyList = {
  "w": "sounds/crash.mp3",
  "a": "sounds/kick-bass.mp3",
  "s": "sounds/snare.mp3",
  "d": "sounds/tom-1.mp3",
  "j": "sounds/tom-2.mp3",
  "k": "sounds/tom-3.mp3",
  "l": "sounds/tom-4.mp3"
};