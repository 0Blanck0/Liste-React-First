import { useState } from 'react'
import './App.css'
import Client from "./Client";
import ClientForm from "./ClientForm";

function addClient(name, state, setState) {
  let clients = state.clients.slice();
  let id;

  if (name.trim() === "") name = "Personne";
  id = (clients.length - 1 < 0) ? 0 : clients[clients.length - 1].id + 1;

  clients.push({
    id,
    nom: name + " " + (id + 1)
  });

  setState({ clients });
}

function deleteClient(id, state, setState) {
  let clients = state.clients.slice();
  const index = clients.findIndex((client) => {
    return client.id === id;
  });

  clients.splice(index, 1);
  setState({ clients });
}

function App() {
  const [state, setState] = useState({
    clients: [
      { id: 0, nom: "Personne 1" },
      { id: 1, nom: "Personne 2" },
      { id: 2, nom: "Personne 3" }
    ]
  });

  return (
    <>
      <h1>List</h1>

      {state.clients.map((client) => (
        <Client options={client} onDelete={(id) => {
          deleteClient(id, state, setState);
        }} />
      ))}

      <ClientForm onSubmit={(name) => {
        addClient(name, state, setState);
      }} />
    </>
  )
}

export default App;
