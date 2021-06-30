import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App() {
  const styles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'serif',
    padding: '10 10'
  }

  return (
  <React.Fragment>
    <div style={styles}>
      <Header />
      <TicketControl />
    </div>
  </React.Fragment>
  );
}

export default App;