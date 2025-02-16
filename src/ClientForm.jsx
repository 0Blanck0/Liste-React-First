import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    newClient: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const onSubmit = this.props.onSubmit;
    onSubmit(this.state.newClient);
    this.setState({ newClient: "" });
  };

  handleChange = (event) => {
    this.setState({ newClient: event.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newClient}
          onChange={this.handleChange}
          type="text"
          placeholder="add"
        />
        <button>send</button>
      </form>
    );
  }
}

export default ClientForm;
