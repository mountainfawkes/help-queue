import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = 'Return to ticket list';
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = 'Add ticket';
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default TicketControl;