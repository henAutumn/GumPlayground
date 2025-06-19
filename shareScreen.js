const shareScreen = async () => {
  let options = {
    video: true,
    audio: false,
    surfaceSwitching: "include",
  };

  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (err) {
    console.log(err);
  }

  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
  ]);
};
