import React, { Component } from "react";

export default class Checkboxes extends Component {
  render() {
    return (
      <div className="checkbox-wrapper">
        <label className="check-container">
          Male
          <input
            type="checkbox"
            name="checkMale"
            checked={this.props.checkMale}
            onChange={this.props.checkHamdler}
          />
          <span className="checkmark"></span>
        </label>
        <label className="check-container">
          Female
          <input
            type="checkbox"
            name="checkFemale"
            checked={this.props.checkFemale}
            onChange={this.props.checkHamdler}
          />
          <span className="checkmark"></span>
        </label>
        <label className="check-container">
          Not specified
          <input
            type="checkbox"
            name="checkUnknown"
            checked={this.props.checkUnknown}
            onChange={this.props.checkHamdler}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}
