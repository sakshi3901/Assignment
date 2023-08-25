import { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./Characters";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(url);
        const char = await res.data.results;
        setCharacters(char);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);
  return (
    <div>
      <Characters characters={characters} />
    </div>
  );
}
