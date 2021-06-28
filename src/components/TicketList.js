import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  return (
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save the record!" />
    <Ticket
      location="3B"
      names="Sleater and Kinney"
      issue="Prop types are throwing an error" />
  );
}

export default TicketList;