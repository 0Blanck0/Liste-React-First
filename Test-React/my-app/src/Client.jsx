import React from "react";

const Client = ({ options, onDelete }) => (
  <ol>
    <li>
      {options.nom}
      <button onClick={() => onDelete(options.id)}>X</button>
    </li>
  </ol>
);

export default Client;
