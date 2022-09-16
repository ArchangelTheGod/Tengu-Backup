window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const transcript_element = document.getElementById("transcript");
const talk_button = document.getElementById("start");
const end_button = document.getElementById("end");
const temp_button = document.getElementById("temp");

let p = document.createElement("p");
transcript_element.appendChild(p);

recognition.addEventListener("result", (e) => {
const transcript = Array.from(e.results)
  .map((result) => result[0])
  .map((result) => result.transcript)
  .join("");
p.textContent = transcript;
if (e.results[0].isFinal) {
  p = document.createElement("p");
  p.textContent = transcript;
  transcript_element.appendChild(p);
  p.textContent = "";

  if (transcript.includes("updates")) {
    alert("Update Version: TEST SERVER 1.4.1 BETA");
  }
  if (transcript.includes("SRC")) {
    window.open("https://github.com/AxxlYT/Tengu-Assistant");
  }
  // if (transcript.includes("close YouTube")) {
  //   window.close("https://www.youtube.com");
  // }
  if (transcript.includes("open YouTube")) {
    window.open("https://www.youtube.com");
  }
  if(transcript.includes("backup")){
    window.open("https://github.com/AxxlYT/Tengu-Backup")
  }
}
});

// function admin(){
//     alert("Administrator Access Granted! Welcome.")
// }
recognition.addEventListener("end", () => {
end_button.disabled = false;
talk_button.disabled = true;
});
talk_button.addEventListener("click", () => {
end_button.disabled = false;
talk_button.disabled = true;
recognition.start();
});
end_button.addEventListener("click", () => {
end_button.disabled = true;
talk_button.disabled = false;
recognition.stop();
});
temp_button.addEventListener("click", () => {
temp_button.disabled = false;
});