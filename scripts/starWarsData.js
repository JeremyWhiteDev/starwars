const API = "https://swapi.dev/api";

// Get Luke Skywalker
export const fetchData = async (url) => {
  const dataFetch = await fetch(`${API}/${url}`);
  const jsonData = await dataFetch.json();
  return jsonData;
};
