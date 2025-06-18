let mediaRecorder;
let recordedBlobs;
const startRecording = () => {
  if (!stream) {
    alert("No Current Stream");
    return;
  }
  console.log("Start recording");
  recordedBlobs = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => {
    console.log("Data is available from the media recorder");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "blue",
    "grey",
    "blue",
  ]);
};
const stopRecording = () => {
  if (!mediaRecorder) {
    alert("Please record before stopping");
    return;
  }
  console.log("stop recording");
  mediaRecorder.stop();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
  ]);
};
const playRecording = () => {
  console.log("play recording");
  if (!recordedBlobs) {
    console.log("No Recording Saved");
    return;
  }
  const superBuffer = new Blob(recordedBlobs);
  const recordedVideoElement = document.querySelector("#other-video");
  recordedVideoElement.src = window.URL.createObjectURL(superBuffer);
  recordedVideoElement.controls = true;
  recordedVideoElement.play();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "blue",
  ]);
};
