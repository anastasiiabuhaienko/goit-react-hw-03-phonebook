// import React from "react";
import { nanoid } from 'nanoid';
import { Component } from "react";
import AddContact from "./AddContact/AddContact";
import Section from "./Section/Section";
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(10),
    }

    const checkDuplicateContact = this.state.contacts.some(addContact =>
      (addContact.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())
    );

    checkDuplicateContact
      ? alert(`${name.toUpperCase()} is already in contacts`)
      : this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));

  };


  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section
          title="Phonebook">
            
          <AddContact
            onSubmit={this.addContact}
          />
        
        </Section>

        <Section
          title="Contacts">
        

          <Filter
            filter={this.filter}
            onChange={this.changeFilter}
          />

          <ContactsList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}

          />
        </Section>

      </>
    );


  };
  
}


