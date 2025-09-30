import { pastorCateg } from "./pastorCateg.js";

let pastorCategHTML = '';

pastorCateg.forEach((pastorItem) => {
    const pastorNAME = pastorItem.name;
    const pastorROLE = pastorItem.role;
    const pastorIMAGE = pastorItem.img;
    const pastorDESCRIPTION = pastorItem.decription;

    pastorCategHTML += `
        <article class="pastor-profile">
        <img src="${pastorIMAGE}" alt="Pastor Happy Overah">
        
        <div class="pastor-info">
          <h3>${pastorNAME}</h3>
          <p class="role">${pastorROLE}</p>
          <p>${pastorDESCRIPTION}.</p>
        </div>
      </article>
    `
    document.querySelector('.js-pastor-container').innerHTML = pastorCategHTML;
});
