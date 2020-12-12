import React from "react";

// limit table to 10 characters at a time
// Should automatically populate when opening the home page
// Using swapi.dev API to pull in data

function Table(props) {
  // console.log(props.characters[1].name)
  const charRows = [];
  for (
    let i = 0;
    i < props.length;
    i++
  ) {
    charRows.push(
      <tr key={props.characters[i].name}>
        <td>{props.characters[i].name}</td>
        <td>{props.characters[i].birth_year}</td>
        <td>{props.characters[i].height}</td>
        <td>{props.characters[i].mass}</td>
        <td>{props.characters[i].homeworld}</td>
        <td>{props.characters[i].species}</td>
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
