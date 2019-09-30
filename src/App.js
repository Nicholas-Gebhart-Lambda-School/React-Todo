import React from "react";
import ItemTable from "./components/Tables/ItemTable";
import AddItemForm from "./components/Forms/AddItemForm";

const listData = [
  { id: 1, what: "Implement React Router", when: "1:00PM" },
  { id: 2, what: "Wrap App with BrowserRouter", when: "1:30PM" },
  { id: 3, what: "Initialize Routes in App.js", when: "1:35PM" }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { list: listData };
  }

  addItem = itemName => {
    const item = {
      id: Date.now(),
      what: itemName.what,
      when: itemName.when
    };
    this.setState({
      list: [...this.state.list, item]
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1>To-Do List</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add item</h2>
            <AddItemForm addItem={this.addItem} />
          </div>
          <div className="flex-large">
            <h2>View items</h2>
            <ItemTable list={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
