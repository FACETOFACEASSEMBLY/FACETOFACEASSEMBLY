<<<<<<< HEAD
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
=======
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
>>>>>>> 75222faff23f9a7584219e30e9320fbb8bc55053
