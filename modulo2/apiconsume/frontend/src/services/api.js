
export const fetchCharacters = async (limit = 58) => {
  const response = await fetch(`https://dragonball-api.com/api/characters?limit=${limit}`);
  return await response.json();
};

export const fetchCharacterById = async (id) => {
  const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  return await response.json();
};

export const fetchPlanets = async () => {
  const response = await fetch("https://dragonball-api.com/api/planets");
  return await response.json();
};


console.log("5"+3);
