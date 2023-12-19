import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams(); // getting the character ID from URL
  const [character, setCharacter] = useState({});
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await response.json();
      setCharacter(data);

      // fetch films data
      if (data.films) {
        const filmsResponse = await Promise.all(
          data.films.map((filmUrl) => fetch(filmUrl))
        );
        const filmsData = await Promise.all(
          filmsResponse.map((filmRes) => filmRes.json())
        );
        setFilms(filmsData);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  return (
    <div>
      <h1>Characters Details:</h1>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair color: {character.hair_color}</p>

      <h3>Films</h3>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetails;
