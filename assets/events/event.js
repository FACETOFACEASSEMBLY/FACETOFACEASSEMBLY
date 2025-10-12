import { eventCateg } from "./eventCateg.js";
  function runEvents() {
    let eventGenerateHTML = '';

eventCateg.forEach((eventItem) => {
    const eventHEADER = eventItem.header;
    const eventTIME = eventItem.time;
    const eventVENUE = eventItem.venue;
    const eventDATEDAY = eventItem.date.day;
    const eventDATEMONTH = eventItem.date.month;

    eventGenerateHTML += `
        <article class="event-card">
        <div class="event-date">
          <span class="day">${eventDATEDAY}</span>
          <span class="month">${eventDATEMONTH}</span>
        </div>
        <div class="event-info">
          <h3> ${eventHEADER}</h3>
          <p><strong>Time:</strong> ${eventTIME}</p>
          <p><strong>Venue:</strong> ${eventVENUE}</p>
        </div>
      </article>
    `
    document.querySelector('.js-event-container').innerHTML = eventGenerateHTML;
});
  }
  runEvents();

