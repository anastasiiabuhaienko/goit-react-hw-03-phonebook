import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';
import css from './AddContact.module.css';


class AddContact extends Component {
    state = {
        name: '',
        number: '',
    };


  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  
  handleSubmit = event => {
    event.preventDefault();    
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' }); 
  };


    render() {
    
        return (
            <form
                className={css.form}
                onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                        
                    />      
                </label>
                    
                <button 
                    className ={css.submitButton}
                    type="submit"
                    >Add contact</button>
            </form>
        );
}
        
};

export default AddContact;

AddContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
};


