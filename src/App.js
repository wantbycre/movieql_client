import React, { Component } from "react";
import { ApolloProvide } from "react-apollo";
import client from "./apollo";

class App extends Component {
  render() {
    return (
      <ApolloProvide client={client}>
        <div className="App" />
      </ApolloProvide>
    );
  }
}

export default App;
