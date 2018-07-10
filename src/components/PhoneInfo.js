import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  
    state = {
      editing: false,
      name: '',
      phone: '',
    }

    shouldComponentUpdate(nextProps, nextState) {
      // default
      // return true;

      if ( this.state !== nextState) {
        return true;
      }
      return this.props.info !== nextProps.info;
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {

      // true -> false (update)

      // false -> true (info props를 state에 세팅)
      const { info, onUpdate } = this.props;

      if (this.state.editing) {
        onUpdate(info.id, {
          name: this.state.name,
          phone: this.state.phone,
        });
      } else {
        this.setState({
          name: info.name,
          phone: info.phone,        
        });
      }

      this.setState({
        editing: !this.state.editing
      })
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      const { name, phone } = this.props.info;
      const { editing } = this.state;
      const style = {
        border: "1px solid black",
        padding: "8px",
        margin: "8px"
      };

      console.log(name);

      return (      
        <div style={style}>
          {
            editing ? (
              <Fragment>
                <div><input name='name' value={this.state.name} onChange={this.handleChange}/></div>
                <div><input name='phone' value={this.state.phone} onChange={this.handleChange}/></div>
              </Fragment>
            ) : (
              <Fragment>
                <div><b>{name}</b></div>
                <div>{phone}</div>
              </Fragment>
            )
          }        
          <button onClick={this.handleRemove}>삭제</button>        
          <button onClick={this.handleToggleEdit}>{editing ? '적용': '수정'}</button>
        </div>      
      );
    }
}

export default PhoneInfo;
