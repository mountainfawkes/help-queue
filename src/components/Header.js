import React from "react";
import helpTicketImg from "./../img/ticket.png";

function Header() {
  return (
    <>
      <h1>Help Queue</h1>
      <img src={helpTicketImg} width="200vw" alt="save our souls" />
    </>
  );
}

export default Header;