import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import TextFieldGroup from "./TextFieldGroup";

class RadioInputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      other: "",
      ckecked: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      other: e.target.value
    });
  }

  render() {
    const {
      values,
      name,
      label,
      onSelect,
      otherlabel,
      askother,
      type,
      error
    } = this.props;
    let radioInputContent;

    radioInputContent = values.map((item, index) => (
      <div className="radio-input-field" key={`radioItem-${index}`}>
        <input
          type={type}
          id={`item-${index}`}
          name={name}
          value={item}
          onClick={onSelect.bind(this)}
        />
        <label htmlFor={`item-${index}`}>{item}</label>
      </div>
    ));

    return (
      <div className="radio-input-group">
        <span className="label-title">{label}</span>
        {radioInputContent}
        {askother && (
          <div className="radio-input-field">
            <input
              className="radio-input-div"
              type={type}
              id={`${name}-other`}
              name={name}
              value={this.state.other}
              onClick={onSelect.bind(this)}
            />
            <label className="radio-label-div" htmlFor={`${name}-other`}>
              {otherlabel}
            </label>
            <TextFieldGroup
              name={name}
              placeholder="Другое"
              value={this.state.other}
              onChange={this.onChange}
              error={error}
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
        )}
      </div>
    );
  }
}

RadioInputGroup.propTypes = {
  type: PropTypes.string,
  values: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  otherlabel: PropTypes.string,
  askother: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

RadioInputGroup.defaultProps = {
  type: "radio"
};
export default RadioInputGroup;
