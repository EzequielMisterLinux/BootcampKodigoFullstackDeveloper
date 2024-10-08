import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getWarriors = async () => {
      try {
        const response = await axios.get('https://dragonball-api.com/api/characters');
        let { items } = response.data;
        setCharacters(items);
      } catch (error) {
        console.error(error);
      }
    };
    getWarriors();
  }, []);

  const agregarFavorito = (character) => {
    const exists = favorites.some((item) => item.id === character.id);

    if (!exists) {
      setFavorites((prevFavorites) => [...prevFavorites, character]);
    } else {
      const updatedFavorites = favorites.filter((item) => item.id !== character.id);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <>
      <div className="characters-container">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character.id} className="character-card">
              <p>{character.name}</p>
              <img src={character.image} alt={character.name}  height="150px"/>
              <p>{character.ki <= 0 ? 'Este guerrero no tiene ki' : `Ki: ${character.ki}`}</p>
              <button onClick={() => agregarFavorito(character)}>
                {favorites.some((item) => item.id === character.id)
                  ? 'Eliminar de favoritos'
                  : 'Favorito'}
              </button>
            </div>
          ))
        ) : (
          <div>Guerreros no encontrados</div>
        )}
      </div>

      <div className="favorites-container">
        <h2>Favoritos:</h2>
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <div key={fav.id} className="favorite-item">
              <img src={fav.image} alt={fav.name} height="100px" />
              <p>{fav.name}</p>
            </div>
          ))
        ) : (
          <p>No hay guerreros en favoritos.</p>
        )}
      </div>
    </>
  );
}
