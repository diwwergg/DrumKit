// Modify New Version code by Mr. Thawatchai B.

document.addEventListener(
  "keydown", (event) => {
    let id = event.key;
    runFunctionDrum(id);
  }
);

document.addEventListener(
  "click", (event) => {
    let id = event.target.id;
    runFunctionDrum(id);
  });

const runFunctionDrum = (id) => {
  console.log(id);
  if (id != null && id != undefined && id != "" && id.length == 1) {
    const isHaveKey = keyList.find((key) => key.key === id);
    if (isHaveKey != null && isHaveKey != undefined) {
      console.log(isHaveKey)
      setTextColor(id);
      playSound(isHaveKey.sound);
      timeoutTextColor(id);
    } else {
      console.log("Not Config Key : " + id)
    }
  }
}

const keyList = [
  { key: "w", sound: "sounds/crash.mp3" },
  { key: "a", sound: "sounds/kick-bass.mp3" },
  { key: "s", sound: "sounds/snare.mp3" },
  { key: "d", sound: "sounds/tom-1.mp3" },
  { key: "j", sound: "sounds/tom-2.mp3" },
  { key: "k", sound: "sounds/tom-3.mp3" },
  { key: "l", sound: "sounds/tom-4.mp3" }
];

const playSound = (sound) => { new Audio(sound).play(); }

const setTextColor = (id) => { document.getElementById(id).style.color = "#000"; };

const timeoutTextColor = (id) => {
  setTimeout(function () {
    document.getElementById(id).style.color = "#da0463";
  }, 200);
};
