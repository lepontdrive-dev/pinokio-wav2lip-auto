module.exports = async () => {
  await $`python inference.py --checkpoint_path wav2lip_gan.pth --face inputs/face.mp4 --audio inputs/voice.wav`;
  console.log("🎬 Video generation complete! Check output.");
};
