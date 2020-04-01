import React, { Component } from "react";
import Contact from "../contact";
import Checkboxes from "../checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default class Contracts extends Component {
  state = {
    contacts: this.props.contacts,
    filteredContacts: this.props.contacts,
    search: "",
    checkMale: true,
    checkFemale: true,
    checkUnknown: true
  };
  findContact = e => {
    this.setState({ search: e.target.value });
  };
  checkHamdler = e => {
    this.setState({ [e.target.name]: e.target.checked }, this.filterContacts);
  };
  filterContacts = () => {
    let tempArray = [];

    if (this.state.checkMale === true) {
      tempArray = [
        ...tempArray,
        this.state.contacts.filter(item => item.gender === "male")
      ];
    }
    if (this.state.checkFemale === true) {
      tempArray = [
        ...tempArray,
        this.state.contacts.filter(item => item.gender === "female")
      ];
    }
    if (this.state.checkUnknown === true) {
      tempArray = [
        ...tempArray,
        this.state.contacts.filter(item => !item.gender)
      ];
    }
    this.setState({ filteredContacts: [].concat(...tempArray) });
  };
  render() {
    const regex = new RegExp(this.state.search.toLocaleLowerCase(), "g");
    const filterData = this.state.filteredContacts.filter(item => {
      return regex.test(
        (item.firstName + " " + item.lastName + item.phone).toLowerCase()
      );
    });
    console.log(this.state.filteredContacts);
    return (
      <div className="contact-list">
        <div className="contact-heading">
          <div className="search-block">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="search-field"
              placeholder="Enter contact name"
              onChange={this.findContact}
              value={this.state.search}
            />
          </div>
          <Checkboxes
            checkHamdler={this.checkHamdler}
            checkMale={this.state.checkMale}
            checkFemale={this.state.checkFemale}
            checkUnknown={this.state.checkUnknown}
          />
        </div>
        <div className="contact-book">
          {filterData.length === 0 ? (
            <div className="not-found">Sorry, nothing found</div>
          ) : (
            filterData.map((contant, index) => (
              <Contact key={index + contant.firstName} contact={contant} />
            ))
          )}
        </div>
      </div>
    );
  }
}
