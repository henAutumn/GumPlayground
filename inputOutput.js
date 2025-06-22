const audioInputEl = document.querySelector("#audio-input");
const audioOutputEl = document.querySelector("#audio-output");
const videoInputEl = document.querySelector("#video-input");

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    devices.forEach((d) => {
      const option = document.createElement("option");
      option.value = d.deviceId;
      option.text = d.label;
      if (d.kind === "audioinput") {
        audioInputEl.appendChild(option);
      } else if (d.kind === "audiooutput") {
        audioOutputEl.appendChild(option);
      } else if (d.kind === "videoinput") {
        videoInputEl.appendChild(option);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const changeAudioInput = async (e) => {
  const deviceId = e.target.value;
  const newConstraints = {
    audio: { deviceId: { exact: deviceId } },
    video: true,
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const tracks = stream.getAudioTracks();
  } catch (err) {
    console.log(err);
  }
};

const changeAudioOutput = async (e) => {
  await videoEl.setSinkId(e.target.value);
  console.log("Changed audio device");
};

const changeVideo = async (e) => {
  const deviceId = e.target.value;
  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const tracks = stream.getVideoTracks();
    console.log(tracks);
  } catch (err) {
    console.log(err);
  }
};

getDevices();
