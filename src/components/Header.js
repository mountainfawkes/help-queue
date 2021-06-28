import React from "react";
import helpTicketImg from "./../img/ticket.png";

function Header() {
  return (
    <h1>Help Queue</h1>
    <img src={helpTicketImg} alt="save our souls (as an image)" />
  );
}

export default Header;