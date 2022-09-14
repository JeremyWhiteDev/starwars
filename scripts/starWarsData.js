const API = "https://swapi.dev/api";

// Get Luke Skywalker
export const fetchData = async (url) => {
  const dataFetch = await fetch(`${API}/${url}`);
  const jsonData = await dataFetch.json();
  return jsonData;
};

export const fetchPlanets = async () => {
  let fetchedData = [];
  for (let i = 1; i < 7; i++) {
    const dataFetch = await fetch(`${API}/planets/?page=${i}`);
    const jsonData = await dataFetch.json();
    fetchedData = fetchedData.concat(jsonData.results);
  }
  console.log(fetchedData);
  return fetchedData;
};
export const fetchSpecies = async () => {
  let fetchedData = [];
  for (let i = 1; i < 5; i++) {
    const dataFetch = await fetch(`${API}/species/?page=${i}`);
    const jsonData = await dataFetch.json();
    fetchedData = fetchedData.concat(jsonData.results);
  }
  console.log(fetchedData);
  return fetchedData;
};
export const fetchShips = async () => {
  let fetchedData = [];
  for (let i = 1; i < 5; i++) {
    const dataFetch = await fetch(`${API}/starships/?page=${i}`);
    const jsonData = await dataFetch.json();
    fetchedData = fetchedData.concat(jsonData.results);
  }
  console.log(fetchedData);
  return fetchedData;
};
