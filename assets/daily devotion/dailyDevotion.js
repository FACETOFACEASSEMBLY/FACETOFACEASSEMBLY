<<<<<<< HEAD
import { dailyDevotionCateg } from "./dailyDevoCateg.js";

let dailyDevotionHTML = '';

dailyDevotionCateg.forEach((dailyItem) => {
    const date = dailyItem.date;
    const devotion = dailyItem.prayer;

    dailyDevotionHTML += `
        <article class="news-card">
          <h4>${date}</h4>
          ${devotion}
        </article>
    `;
    document.getElementById('dailyDev-js').innerHTML = dailyDevotionHTML;
=======
import { dailyDevotionCateg } from "./dailyDevoCateg.js";

let dailyDevotionHTML = '';

dailyDevotionCateg.forEach((dailyItem) => {
    const date = dailyItem.date;
    const devotion = dailyItem.prayer;

    dailyDevotionHTML += `
        <article class="news-card">
          <h4>${date}</h4>
          ${devotion}
        </article>
    `;
    document.getElementById('dailyDev-js').innerHTML = dailyDevotionHTML;
>>>>>>> 75222faff23f9a7584219e30e9320fbb8bc55053
});