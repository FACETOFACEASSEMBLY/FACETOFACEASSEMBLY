import { liveLink } from "./displayLiveLink.js";

const liveWrapper = document.getElementById('liveWrapper');

if (liveWrapper) {
    liveLink.forEach((linkItem) => {
        liveWrapper.innerHTML = linkItem.link;
    });
}

const frame = document.getElementById("liveFrame");
const fallback = document.getElementById("liveFallback");

if (frame && fallback) {
    frame.addEventListener("load", () => {
        frame.style.display = "block";
        fallback.style.display = "none";
    });

    frame.addEventListener("error", () => {
        frame.style.display = "none";
        fallback.style.display = "block";
    });
}

