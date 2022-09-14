import { fetchData, fetchPlanets, fetchSpecies } from "./starWarsData.js";

const displayData = async () => {
  const lukeData = await fetchData("people/1");
  const shipData = await fetchData("starships/?page=4");
  const hothData = await fetchData("planets/4/");
  const filmData = await fetchData("films/");
  const allPlanetsData = await fetchPlanets();
  const allSpeciesData = await fetchSpecies();

  document.getElementById("app").innerHTML =
    renderLukeToDOM(lukeData) +
    renderShipToDOM(shipData) +
    renderHothToDOM(hothData) +
    renderFilmsToDOM(filmData) +
    renderPlanetsToDOM(allPlanetsData) +
    renderSpeciesToDOM(allSpeciesData);
};

const renderLukeToDOM = (data) => {
  let html = `
    <article class="card"><h1>LUKE DATA</h1>
      <section class="item">
        <p>Name: ${data.name}</p>
        <p>height: ${data.height}</p>
      </section>
    </article>
  `;
  return html;
};

const renderShipToDOM = (data) => {
  let html = `
    <article class="card"><h1>SHIP COUNT</h1>
      <section class="item">
        <p>Number of Ships: ${data.count}</p>
    
      </section>
    </article>
  `;
  return html;
};

const renderHothToDOM = (data) => {
  let html = `
    <article class="card"><h1>HOTH DATA</h1>
      <section class="item">
        <p>Planet Name: ${data.name}</p>
        <p>Gravity: ${data.gravity}
    
      </section>
    </article>
  `;
  return html;
};

const renderFilmsToDOM = (data) => {
  let html = `<article class="card"><h1>FILMS</h1>`;
  for (const film of data.results) {
    html += `<section class="item">
      <p>Film Name: ${film.title}</p>
      <p>Released: ${film.release_date}</p>
      </section>`;
  }
  html += "</article>";
  return html;
};
const renderPlanetsToDOM = (data) => {
  let html = `<article class="card"><h1>PLANETS</h1>`;
  data.sort((a, b) => {
    return a.diameter - b.diameter;
  });
  for (const planet of data) {
    html += `<section class="item">
      <p>Planet Name: ${planet.name}</p>
      <p>Diameter: ${planet.diameter}</p>
      </section>`;
  }
  html += "</article>";
  return html;
};
const renderSpeciesToDOM = (data) => {
  let html = `<article class="card"><h1>SPECIES</h1>`;

  for (const species of data) {
    html += `<section class="item">
      <p>Species Name: ${species.name}</p>
      <p>Language: ${species.language}</p>
      </section>`;
  }
  html += "</article>";
  return html;
};

displayData();
