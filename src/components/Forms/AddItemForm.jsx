import React from "react";

class AddItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      what: "",
      when: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.what || !this.state.when) return;

          console.log(this.state);
          this.props.addItem(this.state);
          e.target.id = null;
          e.target.when.value = "";
          e.target.what.value = "";
          this.setState({
            id: null,
            what: "",
            when: ""
          });
        }}
      >
        <label>What</label>
        <input
          type="text"
          name="what"
          value={this.what}
          onChange={this.handleInput}
        />
        <label>When</label>
        <input
          type="text"
          name="when"
          value={this.when}
          onChange={this.handleInput}
        />
        <button>Add new item</button>
      </form>
    );
  }
}

export default AddItemForm;
