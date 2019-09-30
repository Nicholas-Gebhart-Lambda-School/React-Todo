import React from "react";

class ItemTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>What</th>
            <th>When</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.length > 0 ? (
            this.props.list.map(todo => (
              <tr key={todo.id}>
                <td>{todo.what}</td>
                <td>{todo.when}</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      this.props.deleteItem(todo.id);
                      console.log(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nothing to do</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default ItemTable;
