import { liveLink } from "./displayLiveLink.js";

let linkHTML = '';

liveLink.forEach((linkItem) => {
    const link = linkItem.link;
    
    linkHTML = `
        ${link}
    `
    document.getElementById('link-js').innerHTML = linkHTML;
});

