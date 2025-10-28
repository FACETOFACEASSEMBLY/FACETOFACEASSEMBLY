import { audioCateg } from "./audioCateg.js";

let audioHTML = '';

audioCateg.forEach((audioItem) => {
    const name = audioItem.name;
    const audio = audioItem.audio;

    audioHTML += `
        <article class="podcast">
      <h3>${name}</h3>
      <audio controls>
        <source src="${audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </article>
    `;
    document.getElementById('podcast-js').innerHTML = audioHTML;
});