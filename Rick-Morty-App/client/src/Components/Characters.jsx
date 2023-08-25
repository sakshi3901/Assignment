import { useState } from "react";

export default function Characters({ characters }) {
  const [charName, setCharName] = useState("");
  const [CharStatus, setCharStatus] = useState("");
  const [charGender, setCharGender] = useState("");

  const filterChar = characters.filter(
    (names) =>
      names.name.toLowerCase().includes(charName.toLowerCase()) &&
      (names.status.includes(CharStatus) || names.status == "") &&
      (names.gender.includes(charGender) || names.gender == "")
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Rick and Morty Characters</h1>
      <div class="filterSec">
        <div class="inputbox">
          <img src="/search.svg" style={{ width: "20px" }} />
          <input
            type="text"
            placeholder="Search Character"
            value={charName}
            onChange={(e) => {
              setCharName(e.target.value);
            }}
          />
        </div>
        <select
          value={CharStatus}
          onChange={(e) => {
            setCharStatus(e.target.value);
          }}
        >
          <option value={""}>Status</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>

        <select
          value={charGender}
          onChange={(e) => {
            setCharGender(e.target.value);
          }}
        >
          <option value={""}>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>unknown</option>
        </select>
      </div>
      <div class="charCard">
        {filterChar.map((character) => (
          <div class="card" key={character.id}>
            <img src={character.image} class="card-img-top" alt="Char Img" />
            <div class="card-body">
              <h3 class="card-title">{character.name}</h3>
              <div class="details">
                <text>Status: {character.status}</text>
                <text>Species: {character.species}</text>
                <text>Type: {character.type}</text>
                <text>Gender: {character.gender}</text>
                <text>Origin: {character.origin.name}</text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
