
import { fetchCharacters, fetchCharacterById, fetchPlanets } from "./services/api";
import { createPlanetSelector, updateCharacterList } from './components/list-warriors';

export const getData = async (selectedPlanet = null) => {
  try {
    const containerData = document.getElementById("lista-dragon-ball");

    const data = await fetchCharacters();
    const { items: characters } = data;

    if (!characters) {
      throw new Error("No items found in response");
    }

    const filteredCharacters = [];

    for (const character of characters) {
      const characterData = await fetchCharacterById(character.id);
      const { originPlanet } = characterData;
      const { name: planet } = originPlanet;

      if (selectedPlanet && planet !== selectedPlanet) {
        continue;
      }

      filteredCharacters.push(characterData);
    }

    updateCharacterList(containerData, filteredCharacters);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getPlanets = async () => {
  try {
    const listPlanets = document.querySelector("#list-warrior");
    const data = await fetchPlanets();
    const { items: planets } = data;

    const selector = createPlanetSelector(planets, getData);
    listPlanets.appendChild(selector);

  } catch (error) {
    console.error("Error fetching planets:", error);
  }
};
