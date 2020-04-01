import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import { faGenderless } from "@fortawesome/free-solid-svg-icons";
export default class Contact extends Component {
  getGender = (gender = null) => {
    if (gender === "male") {
      return faMars;
    } else if (gender === "female") {
      return faVenus;
    } else {
      return faGenderless;
    }
  };
  render() {
    return (
      <div className="contact">
        <div className="icon">
          <FontAwesomeIcon icon={this.getGender(this.props.contact.gender)} />
        </div>
        <div className="contact-information">
          <h3 className="contact-name">
            {this.props.contact.firstName + " " + this.props.contact.lastName}
          </h3>
          <div className="contact-data">
            <span className="contact-phone">{this.props.contact.phone}</span>
          </div>
        </div>
      </div>
    );
  }
}
