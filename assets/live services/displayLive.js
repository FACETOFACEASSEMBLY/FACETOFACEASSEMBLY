<<<<<<< HEAD
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

  
  setTimeout(() => {
    if (!frame.contentWindow || frame.contentWindow.length === 0) {
      frame.style.display = "none";
      fallback.style.display = "block";
    }
  }, 5000);

 
  frame.onerror = function () {
    frame.style.display = "none";
    fallback.style.display = "block";
  };

=======
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

>>>>>>> 75222faff23f9a7584219e30e9320fbb8bc55053
