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
});