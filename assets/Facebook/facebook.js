import { facebookCateg } from "./facebookCateg.js";

let facebookSummaryHTML = '';

facebookCateg.forEach((facebookItem) => {
    const VIDEO = facebookItem.facebookVid;
    
    facebookSummaryHTML += `
        <div class="fb-video-card">
          ${VIDEO}
        </div>
    `
    document.getElementById('facebook-js').innerHTML = facebookSummaryHTML;
});
