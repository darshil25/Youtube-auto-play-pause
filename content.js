chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const video = document.querySelector('video');
  if (video) {
    if (request.action === 'pause' && !video.paused) {
      video.pause();
    } else if (request.action === 'resume' && video.paused) {
      video.play();
    }
  }
});

document.addEventListener('visibilitychange', () => {
  const video = document.querySelector('video');
  if (video) {
    if (document.hidden) {
      video.pause();
    } else {
      video.play();
    }
  }
});
