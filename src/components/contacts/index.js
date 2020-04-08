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
    checkUnknown: true,
  };
  findContact = (e) => {
    this.setState({ search: e.target.value });
  };
  checkHamdler = (e) => {
    this.setState({ [e.target.name]: e.target.checked }, this.filterContacts);
  };
  checkGender = (arr, check, genderCheck) => {
    if (check) {
      return (arr = [
        ...arr,
        this.state.contacts.filter((item) => item.gender === genderCheck),
      ]);
    } else {
      return arr;
    }
  };
  filterContacts = () => {
    let tempArray = [];
    tempArray = this.checkGender(tempArray, this.state.checkMale, "male");
    tempArray = this.checkGender(tempArray, this.state.checkFemale, "female");
    tempArray = this.checkGender(tempArray, this.state.checkUnknown, undefined);
    this.setState({ filteredContacts: [].concat(...tempArray) });
  };
  render() {
    let searchWord = this.state.search.toLocaleLowerCase();
    searchWord = searchWord.replace(/[^a-zа-я0-9 ]+/g, "");
    const regex = new RegExp(searchWord, "g");
    const filterData = this.state.filteredContacts.filter((item) => {
      return regex.test(
        (item.firstName + " " + item.lastName + item.phone).toLowerCase()
      );
    });

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
