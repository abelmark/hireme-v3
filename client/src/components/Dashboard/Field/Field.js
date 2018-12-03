import React, { Component } from 'react';

class Field extends Component {

  constructor(props){
    super(props);

    this.state = {
      editable: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      editable: !this.state.editable
    })
  }

  converArray = (value) => {
    return (
      <ul>
        {value.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    )
  }

  renderProperty = () => {
    let { value } = this.props;

    if (Array.isArray(value)) {
      value = this.converArray(value);
    }

    if(!this.state.editable){
      return <div>{value}</div>
    } else {
      return <div>
              <label for="editField">
                <input name="editField" value={value}></input>
              </label>
            </div>;
    }
  }

  render() {
    return (
      <div 
        className="i-should-be-global"
        onClick={(e) => this.handleClick(e)}>
        { this.renderProperty() }
      </div>
    )
  }
}

export default Field;