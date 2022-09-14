import { fetchData } from "./starWarsData.js";

const displayData = async () => {
  const lukeData = await fetchData("people/1");
  const shipData = await fetchData("starships/?page=4");
  const hothData = await fetchData("planets/4/");
  const filmData = await fetchData("films/");

  document.getElementById("app").innerHTML =
    renderLukeToDOM(lukeData) +
    renderShipToDOM(shipData) +
    renderHothToDOM(hothData) +
    renderFilmsToDOM(filmData);
};

const renderLukeToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Name: ${data.name}</p>
        <p>height: ${data.height}</p>
      </section>
    </article>
  `;
  return html;
};

const renderShipToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Number of Ships: ${data.count}</p>
    
      </section>
    </article>
  `;
  return html;
};

const renderHothToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Planet Nane: ${data.name}</p>
        <p>Gravity: ${data.gravity}
    
      </section>
    </article>
  `;
  return html;
};

const renderFilmsToDOM = (data) => {
  let html = "<article>";
  for (const film of data.results) {
    html += `<section class="card">
      <p>Film Name: ${film.title}</p>
      <p>Released: ${film.release_date}</p>
      </section>`;
  }
  html += "</article>";
  return html;
};
displayData();
