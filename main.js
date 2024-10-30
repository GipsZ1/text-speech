let speech = new SpeechSynthesisUtterance();
const playButton = document.querySelector("#Listen");

let voices = [];
let addVoices = document.querySelector("#addVoice");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (addVoices.options[i] = new Option(voice.name, i))
  );
};

playButton.addEventListener("click", () => {
  speech.text = document.querySelector("#textarea").value;
  window.speechSynthesis.speak(speech);
});
