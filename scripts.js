const videoEl = document.querySelector("#my-video");
let stream = null; // init stream var so we can use it anywhere
let mediaStream = null;
const constraints = {
  audio: true, // use headphones or be prepared for feedback
  video: true,
};

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    getDevices();
    changeButtons([
      "green",
      "blue",
      "blue",
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
  } catch (err) {
    console.log("user denied access to constraints");
    console.log(err);
  }
};

const showMyFeed = (e) => {
  if (!stream) {
    alert("Stream still loading... ");
  }
  console.log("showMyFeed is working");
  videoEl.srcObject = stream;
  const tracks = stream.getTracks();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);
};

const stopMyFeed = (e) => {
  if (!stream) {
    alert("Stream still loading... ");
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  videoEl.srcObject = null;
  changeButtons([
    "blue",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
  ]);
};

document.querySelector("#share").addEventListener("click", (e) => {
  getMicAndCamera(e);
});
document.querySelector("#show-video").addEventListener("click", (e) => {
  showMyFeed(e);
});
document.querySelector("#stop-video").addEventListener("click", (e) => {
  stopMyFeed(e);
});
document.querySelector("#change-size").addEventListener("click", (e) => {
  changeVideoSize(e);
});
document.querySelector("#start-record").addEventListener("click", (e) => {
  startRecording(e);
});
document.querySelector("#stop-record").addEventListener("click", (e) => {
  stopRecording(e);
});
document.querySelector("#play-record").addEventListener("click", (e) => {
  playRecording(e);
});
document.querySelector("#share-screen").addEventListener("click", (e) => {
  shareScreen(e);
});
