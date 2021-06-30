import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTicketForm(props) {

  const ticket = {};
  ticket.id = v4();

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.handleNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4() });
  }

  

  return(
    <>
      <form onSubmit = {handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue' />
        <button type='submit'>Help</button>
      </form>
    </>
  );
}

NewTicketForm.propTypes = {
  handleNewTicketCreation: PropTypes.func
};

export default NewTicketForm;