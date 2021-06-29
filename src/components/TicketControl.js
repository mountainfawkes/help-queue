import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    }
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
    }
    return (
      <>
        {currentlyVisibleState}
      </>
    );
  }
}

export default TicketControl;