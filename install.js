module.exports = async () => {
  await $`pip install -r requirements.txt`;
  await $`mkdir -p face_detection/detection/sfd`;
  await $`wget -O face_detection/detection/sfd/s3fd.pth https://github.com/Rudrabha/Wav2Lip/releases/download/v0.1/s3fd.pth`;
  await $`wget -O wav2lip_gan.pth https://github.com/Rudrabha/Wav2Lip/releases/download/v0.1/wav2lip_gan.pth`;
  console.log("✅ Wav2Lip setup complete!");
};
