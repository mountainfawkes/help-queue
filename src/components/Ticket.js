import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  const name = "Thato";
  const name2 = "Haley";
  return (
  <h3>3a</h3>
  <h3>{props.location} and {props.names}</h3>
  <p><em>{props.issue}</em></p>
  <hr/>
  );
}

Ticket.propTypes = {
  location: PropTypes.string,
  names: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;