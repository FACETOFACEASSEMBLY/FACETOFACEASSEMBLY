import { ministryCateg } from "./ministryCateg.js";
    function runMinistry() {
        let ministryCategHTML = '';

ministryCateg.forEach((ministryItem) => {
    const ministryHEADER = ministryItem.header;
    const ministryDESCRIPTION = ministryItem.description;

    ministryCategHTML += `
        <article class="ministry">
        <h3>${ministryHEADER}</h3>
        <p>${ministryDESCRIPTION}</p>
      </article>
    `
    document.querySelector('.js-ministry-container').innerHTML = ministryCategHTML;
});
    }
    runMinistry();
