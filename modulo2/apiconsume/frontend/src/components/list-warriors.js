

export const createCharacterCard = (character) => {
    const { name: nameCharacter, image, race, originPlanet, transformations } = character;
    const { name: planet } = originPlanet;
  
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";
  
    const info = document.createElement("article");
    info.className = "articulo";
  
    const transformationsList = transformations && transformations.length > 0
      ? transformations.map(item => `<li>${item.name}</li>`).join('')
      : '<li>No transformations</li>';
  
    info.innerHTML = `
      <h4>${nameCharacter}</h4>
      <img src="${image}" alt="${nameCharacter}" height="200">
      <p>Race: ${race || 'Unknown'}</p>
      <p>Origin Planet: ${planet}</p>
      <h5>Transformations:</h5>
      <ul>${transformationsList}</ul>
    `;
  
    contenedor.appendChild(info);
  
    return contenedor;
  };
  
  export const updateCharacterList = (container, characters) => {
    container.innerHTML = '';
    characters.forEach(character => {
      container.appendChild(createCharacterCard(character));
    });
  };
  
  export const createPlanetSelector = (planets, onChangeCallback) => {
    const selector = document.createElement("select");
    selector.innerHTML = `<option value="">Select a planet</option>${planets.map(item => `<option value="${item.name}">${item.name}</option>`).join('')}`;
  
    selector.addEventListener("change", (event) => {
      const selectedPlanet = event.target.value;
      onChangeCallback(selectedPlanet);
    });
  
    return selector;
  };
  