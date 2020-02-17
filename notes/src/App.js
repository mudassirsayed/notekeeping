import React, { Component } from 'react';
import './App.css';
import NotesInput from "./component/NotesInput";
import NotesList from "./component/NotesList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearAll = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);

    const selectedItems = this.state.items.find(item =>
      item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItems.title,
      editItem: true,
      id: id
    });
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center mb-4 my-4">Notes</h3>
            <NotesInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem} />
            <NotesList
              items={this.state.items}
              clearAll={this.clearAll}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
