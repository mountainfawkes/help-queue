import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterTicketList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
  }

  handleNewTicketCreation = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList, formVisible: false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisible) {
      currentlyVisibleState = <NewTicketForm handleNewTicketCreation={this.handleNewTicketCreation} />
      buttonText = 'Return to ticket list';
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />
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