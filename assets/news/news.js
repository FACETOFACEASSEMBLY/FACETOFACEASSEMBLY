<<<<<<< HEAD
import { newsCateg } from "./newsCateg.js";
  function runNewsFeed() {
  let newsGenerateHTML = '';
  newsCateg.forEach((newsItem) => {
    const newsID = newsItem.id;
    const newsHEADER= newsItem.header;
    const newsDESCRIPTION = newsItem.description;
    const newsDATE = newsItem.date;

    newsGenerateHTML += `
         <div class="news-item">
        <time datetime="2024-01-01">${newsDATE}</time>
        <h3>${newsHEADER}</h3>
        <p>${newsDESCRIPTION}</p>
      </div>
    `
    document.querySelector('.js-news-container').innerHTML = newsGenerateHTML;
});
  }
  runNewsFeed();

=======
import { newsCateg } from "./newsCateg.js";
  function runNewsFeed() {
  let newsGenerateHTML = '';
  newsCateg.forEach((newsItem) => {
    const newsID = newsItem.id;
    const newsHEADER= newsItem.header;
    const newsDESCRIPTION = newsItem.description;
    const newsDATE = newsItem.date;

    newsGenerateHTML += `
         <div class="news-item">
        <time datetime="2024-01-01">${newsDATE}</time>
        <h3>${newsHEADER}</h3>
        <p>${newsDESCRIPTION}</p>
      </div>
    `
    document.querySelector('.js-news-container').innerHTML = newsGenerateHTML;
});
  }
  runNewsFeed();

>>>>>>> 75222faff23f9a7584219e30e9320fbb8bc55053
