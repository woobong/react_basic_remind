import React, { Component } from "react";

class PhoneForm extends Component {

  input = React.createRef();

  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
    console.log(this.input);
    console.log(this.input.current);
    this.input.current.focus();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          ref={this.input}
        />
        <input
          placeholder="phone"
          name="phone"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
