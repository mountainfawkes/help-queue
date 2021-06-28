import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    location: "3A",
    names: "Thato and Haley",
    issue: "Firebase will not save the record!"
  },
  {
    location: "3B",
    names: "Sleater and Kinney",
    issue: "Prop types are throwing an error"
  }
  {
    location: "9F",
    names: "Imani and Jacob",
    issue: "Child component is not rendering"
  }
]

function TicketList() {
  return (
    <React.Fragment>
    {masterTicketList.map((ticket, index) =>
      <Ticket names = {ticket.names}
        location = {ticket.location}
        issue = {ticket.issue}
        key = {index} />
    )}
    </React.Fragment>
  );
}

export default TicketList;