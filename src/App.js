import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 style={{ marginTop: "200px" }}>Hello {name} bing bong</h1>
      </>
    );
  }
}

export default App;
