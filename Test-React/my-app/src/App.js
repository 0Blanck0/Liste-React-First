import "./App.css";
import React, { Component } from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends Component {
  state = {
    clients: [
      { id: 0, nom: "Mec 1" },
      { id: 1, nom: "Mec 2" },
      { id: 2, nom: "Mec 3" }
    ]
  };

  deleteClient = (id) => {
    var clients = this.state.clients.slice();
    const index = clients.findIndex((client) => {
      return client.id === id;
    });

    clients.splice(index, 1);
    this.setState({ clients });
  };

  addClient = (name = "Mec") => {
    var clients = this.state.clients.slice();
    let id;

    if (clients.length - 1 < 0) id = 0;
    else id = clients[clients.length - 1].id + 1;

    clients.push({
      id,
      nom: name + " " + (id + 1)
    });

    this.setState({ clients });
  };

  render() {
    return (
      <div>
        <h1>List</h1>
        {this.state.clients.map((client) => (
          <Client options={client} onDelete={this.deleteClient} />
        ))}
        <ClientForm onSubmit={this.addClient} />
      </div>
    );
  }
}

export default App;
