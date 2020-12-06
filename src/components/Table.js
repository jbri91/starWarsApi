import React from "react";

// limit table to 10 characters at a time
// Should automatically populate when opening the home page
// Using swapi.dev API to pull in data

function Table(props) {
  const charRows = [];
  for (
    let i = 0;
    i < props.character.length &&
    i < props.planets.length &&
    props.species.length;
    i++
  ) {
    charRows.push(
      <tr key={props.character[i].name}>
        <td>{props.character[i].name}</td>
        <td>{props.character[i].birth_year}</td>
        <td>{props.character[i].height}</td>
        <td>{props.character[i].mass}</td>
        <td>{props.planets[i].name}</td>
        <td>{props.species[i].name}</td>
      </tr>
    );
  }

  return (
    <div>
      <br />
      <table>
        <thead>
          <tr style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>HomeWorld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "20px", color: "white" }}>{charRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
