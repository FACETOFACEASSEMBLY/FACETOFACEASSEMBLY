import { liveLink } from "./displayLiveLink.js";

let linkHTML = '';

liveLink.forEach((linkItem) => {
    const link = linkItem.link;
    
    linkHTML = `
        ${link}
    `
    document.getElementById('liveWrapper').innerHTML = linkHTML;
});
const frame = document.getElementById("liveFrame");
  const fallback = document.getElementById("liveFallback");

  // If iframe fails to load after 5 seconds → show fallback
  setTimeout(() => {
    if (!frame.contentWindow || frame.contentWindow.length === 0) {
      frame.style.display = "none";
      fallback.style.display = "block";
    }
  }, 5000);

  // Additional error handling
  frame.onerror = function () {
    frame.style.display = "none";
    fallback.style.display = "block";
  };

